import React from 'react';

function UserPage() {
    const pageStyle = {
        backgroundColor: 'white', // Set background color to black
        color: 'blue', // Set text color to white
        padding: '20px', // Add some padding for better readability
        minHeight: '100vh', // Ensure the page takes up at least the full height of the viewport
    };

    const handleClick = (event) => {
        event.preventDefault();
        const username = document.querySelector('input[type="text"]').value;
        
        
        
      };

    return (
        <div style={pageStyle}>
            <h1>Hello, Adam! This is your personalized dashboard</h1>
            <input type="text" placeholder='Place Prompt Here' required/>
            <button onClick={handleClick} type='Submit'>Enter</button>
        </div>
    );
}

export default UserPage;