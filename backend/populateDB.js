// backend/populateDB.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/Item');  // Ensure you have the Item model

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing items before adding new ones
    await Item.deleteMany({});

    // Sample data to insert, including price field
    const items = [
      { name: 'Item 1', description: 'Description for item 1', price: 10.99 },
      { name: 'Item 2', description: 'Description for item 2', price: 15.49 },
      { name: 'Item 3', description: 'Description for item 3', price: 8.99 },
      { name: 'Item 4', description: 'Description for item 4', price: 12.99 },
    ];

    // Insert items into the database
    await Item.insertMany(items);
    console.log('Sample data added to MongoDB');
    process.exit();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
