import React, { useEffect, useContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

import ProfileContext from '../context/profile/profileContext';

const Profile = () => {
    const profileContext = useContext(ProfileContext);
    const { loadProfile } = profileContext;

    const [profile, setProfile] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    useEffect(() => {
        // const token = localStorage.usertoken;
        // const decoded = jwt_decode(token);

        // setProfile({
        //     fname: decoded.fname,
        //     lname: decoded.lname,
        //     email: decoded.email
        // });
        loadProfile();
    }, []);

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
                </tbody>
            </table>
        </div>
    )
}

export default Profile;
