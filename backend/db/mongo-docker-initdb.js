// init-mongo/init.js
db = db.getSiblingDB('docker_user');  // Replace 'mydatabase' with your desired database name

// Create the database if it does not exist
db.createCollection('users');  // Replace 'mycollection' with your desired collection name


// Switch to the admin database and authenticate as the root user
// db = db.getSiblingDB('admin');
// db.auth(process.env.MONGO_INITDB_ROOT_USERNAME, process.env.MONGO_INITDB_ROOT_PASSWORD);


// // Use the database specified in the environment variable
// db = db.getSiblingDB(process.env.MONGODB_DATABASE);

// // Create the user with the role specified in the environment variable
// db.createUser({
//   user: process.env.MONGODB_USER,
//   pwd: process.env.MONGODB_USER_PASSWORD,
//   roles: [{
//     role: 'readWrite',
//     db: process.env.MONGODB_DATABASE
//   }]
// });