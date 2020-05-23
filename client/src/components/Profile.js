import React, { useEffect, useContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

import ProfileContext from '../context/profile/profileContext';

const Profile = () => {
    const profileContext = useContext(ProfileContext);
    // const { token } = profileContext;

    const [profile, setProfile] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    useEffect(() => {
        // localStorage.setItem('token', token)
        try {
            const token = localStorage.token;
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
        // const token = localStorage.setItem('token', profileContext.token);
        // const decoded = jwt_decode(token);
        // console.log('decoded', decoded)

        // setProfile({
        //     fname: decoded.user.fname,
        //     lname: decoded.user.lname,
        //     email: decoded.user.email
        // });
        // loadProfile();
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
                </tbody>
            </table>
        </div>
    )
}

export default Profile;


// import React, { Component } from 'react'
// import jwt_decode from 'jwt-decode'

// class Profile extends Component {
//     constructor() {
//         super()
//         this.state = {
//             fname: '',
//             lname: '',
//             email: ''
//         }
//     }

//     componentDidMount() {
//         let token = localStorage.token
//         const decoded = jwt_decode(token)
//         console.log('decoded', decoded)
//         this.setState({
//             fname: decoded.user.fname,
//             lname: decoded.user.lname,
//             email: decoded.user.email
//         })
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="jumbotron mt-5">
//                     <div className="col-sm-8 mx-auto">
//                         <h1 className="text-center">PROFILE</h1>
//                     </div>
//                     <table className="table col-md-6 mx-auto">
//                         <tbody>
//                             <tr>
//                                 <td>Fist Name</td>
//                                 <td>{this.state.fname}</td>
//                             </tr>
//                             <tr>
//                                 <td>Last Name</td>
//                                 <td>{this.state.lname}</td>
//                             </tr>
//                             <tr>
//                                 <td>Email</td>
//                                 <td>{this.state.email}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Profile
