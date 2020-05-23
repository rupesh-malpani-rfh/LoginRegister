import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const { logout } = authContext;

    const logOut = e => {
        e.preventDefault();
        logout();
        props.history.push('/logout')
    }

    const loginRegLink = (
        <Fragment>
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
        </Fragment>
    );

    const userLink = (
        <Fragment>
            <li>
                <Link to="/user">
                    User
              </Link>
            </li>
            <li>

                <Link to="/logout" onClick={logOut} className="nav-link">
                    Logout</Link>

            </li>
        </Fragment>
    );

    return (
        <nav className="navbar">

            <ul className="navbar-nav">
                <li>
                    <Link to="/">
                        Home
              </Link>
                </li>
                {localStorage.token ? userLink : loginRegLink}

            </ul>

        </nav>
    )
}

export default Navbar
