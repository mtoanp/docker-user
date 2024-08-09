// init-mongo/init.js
db = db.getSiblingDB('docker_user');  // Replace 'mydatabase' with your desired database name

// Create the database if it does not exist
db.createCollection('users');  // Replace 'mycollection' with your desired collection name
