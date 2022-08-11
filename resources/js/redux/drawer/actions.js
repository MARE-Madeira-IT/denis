import { types } from "./types";

export const setCurrent = (object = {}) => ({
    type: types.SET_CURRENT,
    payload: object
});

export const resetCurrent = () => ({
    type: types.RESET_CURRENT,
});

export const setDrawerState = (state, object = {}) => ({
    type: types.SET_DRAWER_STATE,
    payload: { state: state, object: object }
});
