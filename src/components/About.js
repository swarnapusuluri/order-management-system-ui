import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) setShowList(false); // Close View Orders when Add Order is opened
  };

  const handleToggleList = () => {
    setShowList(!showList);
    if (!showList) setShowForm(false); // Close Add Order when View Orders is opened
  };

  return (
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
    maxWidth: '800px',
    margin: '80px auto 0',
    padding: '20px',
  }}
>
  {/* Top banner with name only */}
  <div style={{
    backgroundColor: '#001a00',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
    border: '2px solid #00ff00'
  }}>
    <h1 style={{
      color: '#00ff00',
      fontSize: '1.8rem',
      margin: 0
    }}>
      <span style={{ fontWeight: 'bold', color: '#66ff66', fontSize: '2rem' }}>Order Management by SWARNA PUSULURI</span>
    </h1>
  </div>

  {/* Corner label for tech info */}
  <div style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#001a00',
    color: '#b3ffb3',
    padding: '10px 14px',
    fontSize: '0.85rem',
    borderRadius: '8px',
    border: '1px solid #00ff00',
    zIndex: 999,
    opacity: 0.9
  }}>
    ✅ Java Spring Boot<br />
    ✅ React.js<br />
    ✅ CI/CD CodeBuild<br />
    ✅ Ongoing Enhancements
  </div>

  {/* Buttons */}
  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '30px' }}>
    <motion.button onClick={handleToggleForm} whileHover={{ scale: 1.05 }} style={buttonStyle}>
      {showForm ? 'Hide Add Order' : 'Add Order'}
    </motion.button>

    <motion.button onClick={handleToggleList} whileHover={{ scale: 1.05 }} style={buttonStyle}>
      {showList ? 'Hide Orders' : 'View Orders'}
    </motion.button>
  </div>

  {/* Expand/Collapse Sections */}
  <AnimatePresence>
    {showForm && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden', marginBottom: '20px' }}
      >
        <OrderForm onAdd={() => {}} />
      </motion.div>
    )}

    {showList && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: 'hidden' }}
      >
        <OrderList />
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

  );
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

export default About;
