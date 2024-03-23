import React from 'react';
import './login.css';


function Login() {
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
            <button type='submit'>Login</button>

        </form>
        </div>
    );
  }
  
  export default Login;