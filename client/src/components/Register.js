import React, { useState, useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Register = (props) => {
    const authContext = useContext(AuthContext);
    const { register } = authContext;

    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    const { fname, lname, email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        register({
            fname,
            lname,
            email,
            password
        });
        props.history.push('/login');
    }

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={fname} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" value={lname} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register;
