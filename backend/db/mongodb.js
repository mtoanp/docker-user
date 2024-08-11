// Load environment variables from project root
require("dotenv").config({ path: __dirname+'/../../.env' });
const mongoose = require('mongoose');

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_USER_PASSWORD = process.env.MONGODB_USER_PASSWORD;
const MONGODB_PORT = process.env.PLAFORM === 'docker' ? process.env.MONGODB_PORT : process.env.MONGODB_HOST_PORT;
const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_USER_PASSWORD}@localhost:${MONGODB_PORT}/docker_user`;
const Plaforminfo = process.env.PLAFORM === 'docker' ? 'via: docker - 27018' : 'via: local - 27017';

const connectToDatabase = async () => {
  try {
    // Attempt to connect to MongoDB using the connection URI from environment variables
    await mongoose.connect(MONGODB_URI, {});
    // Log successful connection
    console.log('MongoDB Database connected successfully!', Plaforminfo);
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