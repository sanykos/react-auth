import { AUTH_SUCCESS } from "../actions/actionTypes"

const initialState = {
    token: ''
}

export default function loginReducer(state = initialState, action) {
    switch(action.type) {
        case AUTH_SUCCESS: {
            return {
                ...state, token: action.token
            }
        }
        default:
            return state
    }
}