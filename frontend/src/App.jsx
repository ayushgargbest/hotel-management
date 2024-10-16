import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';  // Ensure the correct path for Login.jsx
import Signup from './Screens/Signup';  // Ensure the correct path for Signup.jsx
import Home from './Screens/Home';      // Ensure the correct path for Home.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />   {/* Default route to Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
