import React, { useState } from 'react';
import { motion } from 'framer-motion';
import API_BASE_URL from './api';

//const API_BASE_URL = 'https://order-management-backend-wr9s.onrender.com';

const OrderForm = ({ onAdd }) => {
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!customerName.trim() || !status.trim()) {
    alert('Please enter a valid Customer Name and Status.');
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerName, status }),
    });

    console.log('API_BASE_URL:', API_BASE_URL);
    console.log("Response:", response);

    if (response.ok) {
      const data = await response.json();
      onAdd(data);
      setCustomerName('');
      setStatus('');
    } else {
      const error = await response.text();
      alert(`Failed to add order: ${error}`);
    }
  } catch (err) {
    alert(`Error: ${err.message}`);
  }
};


  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ color: '#00ff00', marginTop: '80px' }}>Add New Order</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={buttonStyle}
        >
          Add
        </motion.button>
      </form>
    </motion.div>
  );
};

const inputStyle = {
  padding: '10px',
  width: '200px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  marginRight: '10px',
};
const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#003300',
  color: '#00ff00',
  border: '1px solid #00ff00',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

export default OrderForm;
