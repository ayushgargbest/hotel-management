import React, { useState } from 'react';

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

  return (
    <div>
      <h1 className="login-heading">Sign Up</h1> 
      <div className="box">
        <form>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} />
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </form>
      </div>
    </div>
  );
}

export default Signup;
