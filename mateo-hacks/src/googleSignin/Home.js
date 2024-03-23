import React from "react";

function HomePage() {
    const style = {
        height: '100vh', // Set the height to 100vh (100% of the viewport height)
    };
    const logout =()=>{
        localStorage.clear()
    }
    return (
        <div style={style}>
            <br/>   
            <br/>   
            <br/>   
            <br/>   
            <br/>   
            <br/>   
            
            <h1>Welcome to our website!</h1>
            <p>This is the homepage content.</p>
            <button onClick={logout}>Logout</button>
        </div>

    );
}

export default HomePage;
