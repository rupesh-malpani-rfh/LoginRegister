import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <div>
            <h4>You have been logged out! Click here for <Link to="/login">login</Link></h4>
        </div>
    )
}

export default Logout
