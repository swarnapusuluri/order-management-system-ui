import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/add" style={styles.link}>Add Order</Link>
          <Link to="/orders" style={styles.link}>Order List</Link>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/add" element={<OrderForm onAdd={() => {}} />} />
          <Route path="/orders" element={<OrderList />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    marginBottom: '20px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    fontSize: '18px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default App;
