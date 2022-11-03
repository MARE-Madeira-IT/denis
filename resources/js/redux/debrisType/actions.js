import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisTypes = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_TYPES,
    payload: axios.get(`${window.location.origin}/api/debris/types?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisTypeSelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_TYPE_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/types?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});


export const fetchDebrisType = id => ({
    type: types.FETCH_DEBRIS_TYPE,
    payload: axios.get(`${window.location.origin}/api/debris/types/${id}`),
});

export const deleteDebrisType = id => ({
    type: types.DELETE_DEBRIS_TYPE,
    payload: axios.delete(`${window.location.origin}/api/debris/types/${id}`),
});

export const createDebrisType = data => ({
    type: types.CREATE_DEBRIS_TYPE,
    payload: axios.post(`${window.location.origin}/api/debris/types/`, data),
});

export const updateDebrisType = (id, data) => ({
    type: types.UPDATE_DEBRIS_TYPE,
    payload: axios.put(`${window.location.origin}/api/debris/types/${id}`, data),
});
