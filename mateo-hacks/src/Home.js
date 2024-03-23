import React from "react";
import pic01 from "./splash1.jpeg"; // Import the image

function HomePage() {
    const style = {
        height: '100vh', // Set the height to 100vh (100% of the viewport height)
        backgroundImage: `url(${pic01})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire container with the image
        backgroundPosition: 'center', // Center the image
    };
    
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
        </div>
    );
}

export default HomePage;
