import { types } from "./types";

export const initialState = {
    isAuthenticated: false,
    loading: false,
    currentUser: {},
    permissionLevel: 0,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.LOGIN}_PENDING`:
        case `${types.REGISTER}_PENDING`:
        case `${types.LOGOUT}_PENDING`:
        case `${types.ME}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.REGISTER}_REJECTED`:
        case `${types.REGISTER}_FULFILLED`:
        case `${types.LOGOUT}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.ME}_REJECTED`:
        case `${types.LOGIN}_REJECTED`:
        case `${types.LOGOUT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            };


        case `${types.SET_CURRENT_USER}`:
            return {
                ...state,
                currentUser: action.payload.data.data,
                permissionLevel: action.payload.data.data.permissionLevel
            };

        case `${types.LOGIN_SUCCESS}`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            };

        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            };



        case `${types.ME}_FULFILLED`:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                currentUser: action.payload.data.data,
                permissionLevel: action.payload.data.data.permissionLevel
            };
        default:
            return state
    }
}