import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const logOut = e => {
        e.preventDefault()
        localStorage.removeItem('token')
        props.history.push('/')
    }
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

                    <a href="" onClick={logOut} className="nav-link">
                        Logout</a>

                </li>
            </ul>

        </nav>
    )
}

export default Navbar
