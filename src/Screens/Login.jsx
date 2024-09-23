import React,{useState} from 'react'
function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    function handlEmailChange(event)
    {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event)
    {
        setPassword(event.target.value);
    }
  return(
    <div>
        <h1 className="login-heading">Login</h1>
        <div className="box">
            <form>
                <label>Email:</label>
                <input type="email" value={email} onChange={handlEmailChange}></input>
                <label>PassWord</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
            </form>
        </div>        
    </div>
  )
}
export default Login;
