// Login.js
import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function Login() {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleClick = (event) => {
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Do something with username and password
    if(username === "Adam" && password === "1"){
      console.log("Login successful");
      navigate('/u'); // Navigate to the userPage
    } else {
      console.log("Login failed");
      // Handle login failure
    }
  };

  return (
    <div className='wrapper'> 
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required/>
        </div>
        <div className='input-box'>
          <label>
            <input type='checkbox'/>
            Remember me 
          </label>
        </div>
        <button onClick={handleClick} type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
