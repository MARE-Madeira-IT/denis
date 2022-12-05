import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisThicknesses = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_THICKNESSES,
    payload: axios.get(`${window.location.origin}/api/debris/thicknesses?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisThicknessSelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_THICKNESS_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/thicknesses?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});


export const fetchDebrisThickness = id => ({
    type: types.FETCH_DEBRIS_THICKNESS,
    payload: axios.get(`${window.location.origin}/api/debris/thicknesses/${id}`),
});

export const deleteDebrisThickness = id => ({
    type: types.DELETE_DEBRIS_THICKNESS,
    payload: axios.delete(`${window.location.origin}/api/debris/thicknesses/${id}`),
    meta: { id }
});

export const createDebrisThickness = data => ({
    type: types.CREATE_DEBRIS_THICKNESS,
    payload: axios.post(`${window.location.origin}/api/debris/thicknesses`, data),
});

export const updateDebrisThickness = (id, data) => ({
    type: types.UPDATE_DEBRIS_THICKNESS,
    payload: axios.put(`${window.location.origin}/api/debris/thicknesses/${id}`, data),
});
