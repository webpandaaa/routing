import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className='w-full h-full flex  justify-center gap-10' > 
        {/* <Link to="/home">Home</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to ="/home"
          >Home
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to ="/contact"
          >Contact
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to ="/about"
          >About
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "text-red-300" : "")}
          to ="/image"
          >Image
        </NavLink>
    </nav>
  );
};

export default Nav
