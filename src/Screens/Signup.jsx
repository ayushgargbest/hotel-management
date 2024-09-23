import React,{useState} from 'react'
function Signup() {
    const[name,setName]=useState("");
    const[age,setAge]=useState(0);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    function handleNameChange(event)
    {
        setName(event.target.value);
    }
    function handleAgeChange(event)
    {
        setAge(event.target.value);
    }
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
                <label>Name</label>
                <input type="name" value={name} onChange={handleNameChange}></input>
                <label>Age</label>
                <input type="age" value={age} onChange={handleAgeChange}></input>
                <label>Email:</label>
                <input type="email" value={email} onChange={handlEmailChange}></input>
                <label>PassWord</label>
                <input type="password" value={password} onChange={handlePasswordChange}></input>
            </form>
        </div>        
    </div>
  )
}

export default Signup
