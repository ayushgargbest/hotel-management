import React, { useState } from 'react';
import './Signup.css'; 

function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name:", name, "Age:", age, "Email:", email, "Password:", password);
  }

  return (
    <div className="login-container">
      <img 
        src="/login-image.jpg" 
        alt="Signup Background" 
        className="background-image" 
      />
      <h1 className="login-heading">Sign Up</h1>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
