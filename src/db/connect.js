const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB using URI from .env
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected!");
  } catch (error) {
    console.error(" DB connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
