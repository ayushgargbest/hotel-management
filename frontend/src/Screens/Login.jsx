import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents default form submission behavior (page reload)
    console.log("Email:", email, "Password:", password); // Handle the form data here
  }

  return (
    <div>
      <h1 className="login-heading">Login</h1>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
