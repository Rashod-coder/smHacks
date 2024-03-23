import React from "react";
import pic01 from "./splash1.jpeg"; // Import the image
import "./Home.css"; // Import the CSS file

function HomePage() {
    const style = {
        height: '100vh', // Set the height to 100vh (100% of the viewport height)
        backgroundImage: `url(${pic01})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire container with the image
        backgroundPosition: 'center', // Center the image
    };

    return (
        <div style={style}>
        <div className="container" style={{ backgroundImage: `url(${pic01})` }}>
            <h1 className="title">Welcome to Boost-our-Brains!</h1>
            <p className="paragraph">This is the homepage content.</p>
            <p className="mission"><strong>Our Mission:</strong> We, as a young group of students, aspire to spread our idea that education is deserved by all. We want all youth, from the underpriviledged to the ambitious, to have the opportunity to gain a solid education and learn so that they can put it to practical use and be the new tech wizards of contemporary society.</p>
        </div>
        </div>
    );
}

export default HomePage;
