import {
    PROFILE_SUCCESS,
    PROFILE_FAIL
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case PROFILE_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                profile: action.payload
            };
        case PROFILE_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                error: action.payload
            };
        default:
            return state;
    }
}