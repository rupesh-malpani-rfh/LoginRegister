import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const Profile = () => {

    const [profile, setProfile] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    const token = localStorage.token;

    useEffect(() => {
        localStorage.setItem('token', token)
        try {

            const token = localStorage.token;
            if (!token) {
                return <div>No Token!</div>
            }
            const decoded = jwt_decode(token);
            console.log('decoded', decoded);

            setProfile({
                fname: decoded.user.fname,
                lname: decoded.user.lname,
                email: decoded.user.email
            });
        } catch (err) {
            console.error(err)
        }

    }, [localStorage.token]);

    return (
        <div className="form-container">
            <table className="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>Fist Name</td>
                        <td>{profile.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{profile.lname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{profile.email}</td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>{profile.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile;
