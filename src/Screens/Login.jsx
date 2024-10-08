import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <h1 className="login-heading">Login</h1>
      <div className="box">
        <form>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </form>
        <button>
          <Link to="/Signup">Sign Up</Link> {/* Corrected path */}
        </button>
      </div>
    </div>
  );
}

export default Login;
