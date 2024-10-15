import React from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
<<<<<<< HEAD
    <>
    <Home/>
    
    </>    
=======
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>    
>>>>>>> 44a9f8c5b64201343ece82fa3644460e07ede4e5
  );
}

export default App;
