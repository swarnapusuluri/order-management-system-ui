import React, { useState } from 'react';
import API_BASE_URL from './api';

function OrderForm({ onAdd }) {
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerName, status }),
    });

    const data = await response.json();
    onAdd(data); // update UI
    setCustomerName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Order</h3>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <button type="submit">Add Order</button>
    </form>
  );
}

export default OrderForm;
