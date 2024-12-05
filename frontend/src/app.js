// src/components/ItemList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data); // Assume items array contains the price
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong><br />
            {item.description}<br />
            Price: R${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
