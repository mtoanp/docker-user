require("dotenv").config();

// Get the client
const mysql = require("mysql2/promise");

// Create the connection to database
const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

database
  .getConnection()
  .then(() => {
    console.log("Database connected !");
  })
  .catch((err) => {
    console.error(err);
  });


module.exports = database
