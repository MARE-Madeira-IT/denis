import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisRugosities = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_RUGOSITIES,
    payload: axios.get(`${window.location.origin}/api/debris/rugosities?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisRugositySelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_RUGOSITY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/rugosities?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchDebrisRugosity = id => ({
    type: types.FETCH_DEBRIS_RUGOSITY,
    payload: axios.get(`${window.location.origin}/api/debris/rugosities/${id}`),
});

export const deleteDebrisRugosity = id => ({
    type: types.DELETE_DEBRIS_RUGOSITY,
    payload: axios.delete(`${window.location.origin}/api/debris/rugosities/${id}`),
    meta: { id }
});

export const createDebrisRugosity = data => ({
    type: types.CREATE_DEBRIS_RUGOSITY,
    payload: axios.post(`${window.location.origin}/api/debris/rugosities/`, data),
});

export const updateDebrisRugosity = (id, data) => ({
    type: types.UPDATE_DEBRIS_RUGOSITY,
    payload: axios.put(`${window.location.origin}/api/debris/rugosities/${id}`, data),
});
