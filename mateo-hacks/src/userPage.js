
import React from 'react';

function UserPage() {
    const pageStyle = {
        backgroundColor: 'black', // Set background color to black
        color: 'white', // Set text color to white
        padding: '20px', // Add some padding for better readability
    };

    return (
        <div style={pageStyle}>
            <h1>Hello, Adam! This is your personalized dashboard</h1>
        </div>
    );
}

export default UserPage;
