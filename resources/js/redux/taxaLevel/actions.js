import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaLevels = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_LEVELS,
    payload: axios.get(`${window.location.origin}/api/taxa/levels?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaLevelSelector = (filters = {}) => ({
    type: types.FETCH_TAXA_LEVEL_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/levels?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});


export const fetchTaxaLevel = id => ({
    type: types.FETCH_TAXA_LEVEL,
    payload: axios.get(`${window.location.origin}/api/taxa/levels/${id}`),
});

export const deleteTaxaLevel = id => ({
    type: types.DELETE_TAXA_LEVEL,
    payload: axios.delete(`${window.location.origin}/api/taxa/levels/${id}`),
    meta: { id }
});

export const createTaxaLevel = data => ({
    type: types.CREATE_TAXA_LEVEL,
    payload: axios.post(`${window.location.origin}/api/taxa/levels`, data),
});

export const updateTaxaLevel = (id, data) => ({
    type: types.UPDATE_TAXA_LEVEL,
    payload: axios.put(`${window.location.origin}/api/taxa/levels/${id}`, data),
});
