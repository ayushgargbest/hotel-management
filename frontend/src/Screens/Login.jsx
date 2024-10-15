import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(true); 

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email, "Password:", password);
  }

  return (
    <div className="login-container">
      <img
        src="/login-image.jpg"
        alt="Login Background"
        className="background-image"
      />
      <h1 className="login-heading">Login</h1>
      <div className="role-buttons">
        <button 
          className={`role-button ${isClient ? 'active' : ''}`} 
          onClick={() => setIsClient(true)}
        >
          Client Login
        </button>
        <button 
          className={`role-button ${!isClient ? 'active' : ''}`} 
          onClick={() => setIsClient(false)}
        >
          Staff Login
        </button>
      </div>
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

        {isClient && (
          <p>
            Don't have an account? 
            <Link to="/signup"> Sign Up</Link>
          </p>
        )}
      </div>
      <div className={`login-info ${isClient ? 'client-info' : 'staff-info'}`}>
        <h2>{isClient ? "Client Login" : "Staff Login"}</h2>
      </div>
    </div>
  );
}

export default Login;
