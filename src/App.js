import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import About from './components/About';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundVideoWrapper from './components/BackgroundVideoWrapper'; // Video wrapper

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 },
  };

  const pageTransition = {
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/add"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <OrderForm onAdd={() => {}} />
            </motion.div>
          }
        />
        <Route
          path="/orders"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <OrderList />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
      <>
    <video autoPlay muted loop className="background-video">
      <source src="/background.mp4" type="video/mp4" />
    </video>
    <Router>
      <BackgroundVideoWrapper>
        <div className="App">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Add Order</Link>
            <Link to="/orders" className="nav-link">Order List</Link>
          </nav>

          <AnimatedRoutes />
        </div>
      </BackgroundVideoWrapper>
    </Router>
    </>

  );
}

export default App;
