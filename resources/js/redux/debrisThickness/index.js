import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    meta: {},
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_DEBRIS_THICKNESS_SELECTOR}_PENDING`:
        case `${types.FETCH_DEBRIS_THICKNESSES}_PENDING`:
        case `${types.FETCH_DEBRIS_THICKNESS}_PENDING`:
        case `${types.CREATE_DEBRIS_THICKNESS}_PENDING`:
        case `${types.UPDATE_DEBRIS_THICKNESS}_PENDING`:
        case `${types.DELETE_DEBRIS_THICKNESS}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_DEBRIS_THICKNESS_SELECTOR}_REJECTED`:
        case `${types.FETCH_DEBRIS_THICKNESSES}_REJECTED`:
        case `${types.FETCH_DEBRIS_THICKNESS}_REJECTED`:
        case `${types.CREATE_DEBRIS_THICKNESS}_REJECTED`:
        case `${types.UPDATE_DEBRIS_THICKNESS}_REJECTED`:
        case `${types.DELETE_DEBRIS_THICKNESS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.FETCH_DEBRIS_THICKNESS_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.FETCH_DEBRIS_THICKNESSES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };
        case `${types.FETCH_DEBRIS_THICKNESS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: {
                    ...action.payload.data.data
                }
            };
        case `${types.DELETE_DEBRIS_THICKNESS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(record => record.id !== action.meta.id)
            };

        case `${types.CREATE_DEBRIS_THICKNESS}_FULFILLED`:
            return {
                ...state,
                data: [action.payload.data.data, ...state.data],
                loading: false,
            };

        case `${types.UPDATE_DEBRIS_THICKNESS}_FULFILLED`:
            return {
                ...state,
                data: state.data.map((record) =>
                    record.id === action.payload.data.data.id
                        ? action.payload.data.data
                        : record
                )
            };

        default:
            return state
    }
}