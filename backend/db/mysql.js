// Get the client
const mysql = require("mysql2/promise");

// Construct the dynamic URI for MongoDB
const MYSQL_PORT = process.env.PLAFORM === 'docker' ? process.env.MYSQL_PORT : process.env.MYSQL_HOST_PORT;
const Platforminfo = process.env.PLATFORM === 'docker' 
    ? `via: docker - ${MYSQL_PORT}` 
    : `via: local - ${MYSQL_PORT}`;

// Create the connection to database
const database = mysql.createPool({
  host: process.env.MYSQL_HOST, // Service name of DB in docker-compose
  port: process.env.MYSQL_PORT, // Port inside the container NOT HOST PORT for ACCESS.
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

database
  .getConnection()
  .then(() => {
    console.log("MySQL Database connected !", Platforminfo);
  })
  .catch((err) => {
    console.error(err);
  });


module.exports = database
