import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
    PROFILE_SUCCESS,
    PROFILE_FAIL
} from '../types';

const ProfileState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        profile: null,
        error: null
    };

    const [state, dispatch] = useReducer(ProfileReducer, initialState);



    // Register
    const loadProfile = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/profile');
            dispatch({
                type: PROFILE_SUCCESS,
                payload: res.data
            });


        } catch (err) {
            dispatch({
                type: PROFILE_FAIL,
                payload: err.response.data.msg
            });
        }

    }


    return (
        <ProfileContext.Provider value={{
            token: state.token,
            profile: state.profile,
            error: state.error,
            loadProfile
        }}>
            {props.children}
        </ProfileContext.Provider>
    );
}

export default ProfileState;