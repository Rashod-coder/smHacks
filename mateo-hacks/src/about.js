import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component

function AboutUsPage() {
  return (
    <div>
      <Header />
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Welcome to Boost-our-Brains! Here, you can learn more about our goals, our approach, and our team.</p>
        <h2>Our goals</h2>
        <p>Our goals are to foster education to minorities and the underpriveledged throughout the world, regardless of location.</p>
        <h2>Our Approach</h2>
        <ul>
          <li>Spreading awareness through our website</li>
          <li>Interactivity</li>
          <li>Innovation</li>
          <li>Teamwork</li>
          <li>Continuous improvement</li>
        </ul>
        <h2>Our Team</h2>
        <p>Meet the talented individuals who make our company great: Dhruv Kothari, Aadhyathamik Varagahiri, Rishit Gupta, and Vikram Subramanian.</p>
        {/* Adding images */}
        <div>
          <h2>Our Team Photos</h2>
          <img src="path_to_image/DhruvKothari.jpg" alt="Dhruv Kothari" />
          <img src="path_to_image/AadhyathamikVaragahiri.jpg" alt="Aadhyathamik Varagahiri" />
          <img src="path_to_image/RishitGupta.jpg" alt="Rishit Gupta" />
          <img src="path_to_image/VikramSubramanian.jpg" alt="Vikram Subramanian" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;