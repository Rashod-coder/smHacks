import React from 'react';
import './login.css';


function Login() {


  const handleClick = (event) => {
    // console.log('testing ');
    event.preventDefault();
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Do something with username and password
    if(username === "Adam" && password === "1"){
      console.log("works");
    }else{
      console.log("failed");
    }
    // console.log("Username:", username);
    // console.log("Password:", password);
    
  }
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
            <button onClick = {handleClick} type='submit'>Login</button>

        </form>
        </div>
    );
  }
  
  export default Login;