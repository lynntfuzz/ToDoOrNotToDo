import React from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap';

// I want to create a navBar that contains links to the group and challenge components. 
 
const Navbar = 
    function() {
      return (
        <Nav className=" navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
        Home
        
        </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <NavItem href="/signup">Sign Up</NavItem>
        <NavItem href="/login">Log In</NavItem>
        </Nav>
      );
    }
//   ReactDOM.render(<Navbar />, document.querySelector('navbar'));

//   export default Navbar