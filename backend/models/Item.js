// backend/models/Item.js

const mongoose = require('mongoose');

// Define the schema for the Item
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Ensures name is provided
  },
  description: {
    type: String,
    required: true,  // Ensures description is provided
  },
  price: {
    type: Number,
    required: true,  // Ensures price is provided
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set the creation date to now
  },
});

// Create the Item model using the schema
const Item = mongoose.model('Item', itemSchema);

// Export the model so it can be used in other files
module.exports = Item;
