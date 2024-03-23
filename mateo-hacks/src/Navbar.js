import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ scrollToSection, aboutRef, projectsRef, contactRef }) => {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand fs-4" href="#" style={{ color: 'blue' }} ></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="siderbar offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bootstrap Navbar</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-5">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item mx-2">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" style={{ color: 'blue' }}>Contact</a>
                </li>
                <li className="nav-item mx-2">
                <a className="nav-link" href="#contact" style={{ color: 'blue' }}>Contact</a>
                </li>
                <li className="nav-item mx-2">
                <Link to="/login">Login</Link>
                </li>
              </ul>
              <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                <Link to="/login" className="text-white">Login</Link>
            
                
                
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </main>
  );
};

export default Navbar;
