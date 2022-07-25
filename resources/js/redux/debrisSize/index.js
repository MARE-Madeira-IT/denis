import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_DEBRIS_SIZES}_PENDING`:
        case `${types.FETCH_DEBRIS_SIZE}_PENDING`:
        case `${types.CREATE_DEBRIS_SIZE}_PENDING`:
        case `${types.UPDATE_DEBRIS_SIZE}_PENDING`:
        case `${types.DELETE_DEBRIS_SIZE}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.ME}_REJECTED`:
        case `${types.FETCH_DEBRIS_SIZES}_REJECTED`:
        case `${types.FETCH_DEBRIS_SIZE}_REJECTED`:
        case `${types.CREATE_DEBRIS_SIZE}_REJECTED`:
        case `${types.UPDATE_DEBRIS_SIZE}_REJECTED`:
        case `${types.DELETE_DEBRIS_SIZE}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_DEBRIS_SIZES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };
        case `${types.FETCH_DEBRIS_SIZE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: {
                    ...action.payload.data.data
                }
            };
        case `${types.DELETE_DEBRIS_SIZE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(record => record.id !== action.meta.id)
            };

        case `${types.CREATE_DEBRIS_SIZE}_FULFILLED`:
            return {
                ...state,
                data: [action.payload.data.data, ...state.data]
            };

        case `${types.UPDATE_DEBRIS_SIZE}_FULFILLED`:
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