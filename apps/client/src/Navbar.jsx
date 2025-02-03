//Consistent Navbar across all pages
//Contains Home, and Profile buttons

//Can possibly include Emma and the logo and the coin count

import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <div className="left-buttons">
                    <li><Link to="/">Home</Link></li>
                </div>
                <div className="right-buttons">
                    <li><Link to="/profile">Profile</Link></li>
                    {/*Add more buttons here*/}
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
