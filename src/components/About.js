import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OrderForm from './OrderForm';
import OrderList from './OrderList';

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(true); // visible on page load

  const handleToggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) setShowList(false);
  };

  const handleToggleList = () => {
    setShowList(!showList);
    if (!showList) setShowForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: '800px',
        margin: '20px auto 0',
        padding: '20px',
      }}
    >
      {/* Top banner */}
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
          <span style={{ fontWeight: 'bold', color: '#66ff66', fontSize: '2rem' }}>
            Order Management by SWARNA PUSULURI
          </span>
        </h1>
      </div>

      {/* About Me Toggle - Top Left */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 999
      }}>
        <motion.button
          onClick={() => setShowAboutMe(prev => !prev)}
          whileHover={{ scale: 1.05 }}
          style={{
            padding: '8px 12px',
            background: '#001a00',
            color: '#00ff00',
            border: '1px solid #00ff00',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          {showAboutMe ? 'Hide About Me' : 'About Me'}
        </motion.button>

        <AnimatePresence>
          {showAboutMe && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: '10px',
                background: '#001a00',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #00ff00',
                fontSize: '0.85rem',
                color: '#b3ffb3',
                maxWidth: '260px'
              }}
            >
              <strong>Vasanta Swarna Ratnam Pusuluri</strong><br />
              Java | Spring Boot | React | AWS | CI/CD | GEN-AI | Docker | Kubernetes | Databases<br />
              📧 <a href="mailto:swarnapusuluri@gmail.com" style={{ color: '#99ff99' }}>swarnapusuluri@gmail.com</a><br />
              🔗 <a href="https://www.linkedin.com/in/swarna-pusuluri/" target="_blank" rel="noreferrer" style={{ color: '#99ff99' }}>LinkedIn</a><br />
              💻 <a href="https://github.com/swarnapusuluri" target="_blank" rel="noreferrer" style={{ color: '#99ff99' }}>GitHub</a><br />
              This Project: Java, React, CI/CD, Ongoing Enhancements
            </motion.div>
          )}
        </AnimatePresence>
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

      {/* Animated Sections */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden', marginBottom: '20px' }}
          >
            <OrderForm onAdd={() => { }} />
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
            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              paddingRight: '10px',
              border: '1px solid #00ff00',
              borderRadius: '8px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}>
              <OrderList />
            </div>
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
