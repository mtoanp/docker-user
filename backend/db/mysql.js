// Get the client
const mysql = require("mysql2/promise");

// Construct the dynamic URI for MongoDB
const MYSQL_HOST = process.env.PLATFORM === 'docker' ? "db-mysql" : process.env.MYSQL_HOST;
const Platforminfo = process.env.PLATFORM === 'docker' 
? `> docker > host: ${MYSQL_HOST} > host-port: ${process.env.DOCKER_MYSQL_HOST_PORT}` 
: `> local  > host: ${MYSQL_HOST} > host-port: ${process.env.MYSQL_PORT}`;


// Create the connection to database
const database = mysql.createPool({
  host: MYSQL_HOST, // Service name of DB in docker-compose
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
