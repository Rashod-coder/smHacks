import React from "react";
import 

function HomePage() {
    const style = {
        height: '100vh', // Set the height to 100vh (100% of the viewport height)
        backgroundImage: 'url("splash1.jpeg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
    };
    
    return (
        <div style={style}>
            
            <h1>Welcome to our website!</h1>
            <p>This is the homepage content.</p>
            
        </div>
    );
}

export default HomePage;