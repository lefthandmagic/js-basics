import React, { Component } from 'react';


//stateless functional component
const NavBar = ({totalCounters}) => {
    return ( <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar
      <span className="bg bg-pill bg-secondary">
          {totalCounters}</span>
      </a>
      
    </div>
  </nav> );
}
 
export default NavBar