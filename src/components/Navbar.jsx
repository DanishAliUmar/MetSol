import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center">
        <li className="mx-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/about-us" className="text-white hover:text-gray-300">About Us</Link>
        </li>
        <li className="mx-4">
          <Link to="/our-services" className="text-white hover:text-gray-300">Our Services</Link>
        </li>
        <li className="mx-4">
          <Link to="/pricing-plan" className="text-white hover:text-gray-300">Pricing</Link>
        </li>
        <li className="mx-4">
          <Link to="/team-member" className="text-white hover:text-gray-300">Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
