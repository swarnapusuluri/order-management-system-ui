import React, { useEffect, useState } from 'react';
import OrderForm from './OrderForm';

function OrderList() {
  const [orders, setOrders] = useState([]);

  // Fetch all orders from backend
  const fetchOrders = () => {
    fetch("http://localhost:8080/api/orders")
      .then(response => response.json())
      .then(data => setOrders(data));
  };

  // Initial load
  useEffect(() => {
    fetchOrders();
  }, []);

  // Add new order to state
  const addOrder = (order) => {
    setOrders(prev => [...prev, order]);
  };

  // Delete order from backend and update state
  const deleteOrder = async (id) => {
    await fetch(`http://localhost:8080/api/orders/${id}`, {
      method: 'DELETE',
    });
    setOrders(prev => prev.filter(order => order.id !== id));
  };

  return (
    <div>
      <h2>Order List</h2>
      <OrderForm onAdd={addOrder} />

      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => deleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
