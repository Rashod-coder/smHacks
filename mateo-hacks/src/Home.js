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
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42848.761737423556!2d-122.34330040354396!3d37.5608606211979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f337dc7bdad%3A0x9a370fdb805351a!2sAutism%20Learning%20Partners%20San%20Mateo!5e0!3m2!1sen!2sus!4v1711231091153!5m2!1sen!2sus"
  width="600"
  height="450"
  style={{ border:0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>
        
    );
}

export default HomePage;
