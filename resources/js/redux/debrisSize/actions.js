import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisSizes = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_SIZES,
    payload: axios.get(`${window.location.origin}/api/debris/sizes?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisSizeSelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_SIZE_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/sizes?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchDebrisSize = id => ({
    type: types.FETCH_DEBRIS_SIZE,
    payload: axios.get(`${window.location.origin}/api/debris/sizes/${id}`),
});

export const deleteDebrisSize = id => ({
    type: types.DELETE_DEBRIS_SIZE,
    payload: axios.delete(`${window.location.origin}/api/debris/sizes/${id}`),
});

export const createDebrisSize = data => ({
    type: types.CREATE_DEBRIS_SIZE,
    payload: axios.post(`${window.location.origin}/api/debris/sizes/`, data),
});

export const updateDebrisSize = (id, data) => ({
    type: types.UPDATE_DEBRIS_SIZE,
    payload: axios.put(`${window.location.origin}/api/debris/sizes/${id}`, data),
});
