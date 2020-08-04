import axios from '../../axios/axios-swagger'
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';
export default function login(username, password, isLogin) {
    return async dispatch => {
        const loginData = {
            username, password
        }
        const response = await axios.post('/api-token-auth/', loginData)
        const token = response.data.token;
        localStorage.setItem('Token', token)
        dispatch(loginSuccess(token))
        //console.log(response.data.token)
    }
}


export function loginSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function logout() {
    localStorage.removeItem('Token')
    return {
        type: AUTH_LOGOUT
    }
}