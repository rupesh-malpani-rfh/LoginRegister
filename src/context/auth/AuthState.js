import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        error: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);



    // Register
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });


        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            });
        }

    }

    // Login
    const loginUser = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.post('/api/auth', formData, config);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.response.data.msg
            });
        }
    }
    return (
        <AuthContext.Provider value={{
            token: state.token,
            error: state.error,
            register,
            loginUser
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;