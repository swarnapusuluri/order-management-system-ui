import logo from './logo.svg';
import './App.css';

import React from 'react';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
      <h1>Order Management System</h1>
      <OrderList />
    </div>
  );
}

export default App;
