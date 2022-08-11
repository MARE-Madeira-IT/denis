import { types } from "./types";

export const initialState = {
    loading: false,
    current: {},
    state: 0, // 0 = closed; 1 = visible
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.SET_CURRENT}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.SET_CURRENT}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };

        case `${types.SET_CURRENT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.object,
            };

        case `${types.SET_DRAWER_STATE}`:
            return {
                ...state,
                state: action.payload.state,
                current: action.payload.object,
            };


        default:
            return state
    }
}