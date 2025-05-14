import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Welcome to the Order Management System</h1>
      <p>Created by <strong>Swarna Pusuluri</strong></p>
      <p>
        This simple web app lets you add, view, and manage orders easily.
        It's built using <strong>Java Spring Boot (Backend)</strong> and <strong>React.js (Frontend)</strong>.
      </p>
      <p>We are working on many exciting upgrades including:</p>
      <ul style={styles.list}>
        <li> Update Orders</li>
        <li> Delete Orders</li>
        <li> Database Integration</li>
        <li> Deployed for public access</li>
      </ul>

      <button style={styles.button} onClick={() => navigate('/add')}>
        ➕ Click here to Add Orders
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  list: {
    textAlign: 'left',
    maxWidth: '400px',
    margin: 'auto',
    marginBottom: '30px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default About;
