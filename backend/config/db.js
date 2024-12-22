require('dotenv').config(); 
const mongoose = require('mongoose');

console.log("MongoDB URI:", process.env.DB_URL); 

let isConnected = false;

async function connect() {
  if (isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = !!db.connections[0].readyState;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Database connection failed");
  }
}

module.exports = { connect };
