// Get the client
const mongoose = require('mongoose');

// Construct the dynamic URI for MongoDB
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_USER_PASSWORD = process.env.MONGODB_USER_PASSWORD;
const MONGODB_HOST = process.env.PLATFORM === 'docker' ? "db-mongo" : process.env.MONGODB_HOST;
const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_USER_PASSWORD}@${MONGODB_HOST}:${process.env.MONGODB_PORT}/docker_user`;
const Platforminfo = process.env.PLATFORM === 'docker' 
    ? `> docker > host: ${MONGODB_HOST} > host-port: ${process.env.DOCKER_MONGODB_HOST_PORT}` 
    : `> local  > host: ${MONGODB_HOST} > host-port: ${process.env.MONGODB_PORT}`;

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    // Attempt to connect to MongoDB using the connection URI from environment variables
    await mongoose.connect(MONGODB_URI, {});
    // Log successful connection
    console.log('MongoDB Database connected successfully!', Platforminfo);
  } catch (err) {
    // Log connection errors
    console.error('MongoDB Database connection error:', err);
    // Optionally, you can exit the process with a failure code if the connection fails
    process.exit(1);
  }
};

// Listen for connection events
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB Database disconnected');
});

// Optional: Reconnect on disconnection
mongoose.connection.on('reconnected', () => {
  console.log('MongoDB Database reconnected');
});

// Call the connection function
connectToDatabase();

module.exports = mongoose;