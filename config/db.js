const mongoose = require('mongoose');
require("dotenv").config();

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri);

// Check connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the Mongoose connection
module.exports = mongoose;
