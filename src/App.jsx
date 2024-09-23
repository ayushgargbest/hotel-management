import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Navbar from './Components/Navbar';
import SubNavBar from './Components/SubNavBar';

function App() {
  return (
    <>
    <Navbar/>
    <SubNavBar/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router> */}
    </>
    
  );
}

export default App;
