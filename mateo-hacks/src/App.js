import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './Navbar';
import Home from './Home';
import Login from './logIn';
import UserPage from './userPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Define routes within Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/u" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
