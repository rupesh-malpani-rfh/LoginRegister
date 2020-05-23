import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-nav">
                <li>
                    <Link to="/">
                        Home
              </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
              </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
              </Link>
                </li>
                <li>
                    <Link to="/user">
                        User
              </Link>
                </li>
                <li>
                    <Link to="/logout">
                        Logout
              </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar
