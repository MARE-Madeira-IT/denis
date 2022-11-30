import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaViabilities = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_VIABILITIES,
    payload: axios.get(`${window.location.origin}/api/taxa/viabilities?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaViabilitySelector = (filters = {}) => ({
    type: types.FETCH_TAXA_VIABILITY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/viabilities?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaViability = id => ({
    type: types.FETCH_TAXA_VIABILITY,
    payload: axios.get(`${window.location.origin}/api/taxa/viabilities/${id}`),
});

export const deleteTaxaViability = id => ({
    type: types.DELETE_TAXA_VIABILITY,
    payload: axios.delete(`${window.location.origin}/api/taxa/viabilities/${id}`),
    meta: { id }
});

export const createTaxaViability = data => ({
    type: types.CREATE_TAXA_VIABILITY,
    payload: axios.post(`${window.location.origin}/api/taxa/viabilities/`, data),
});

export const updateTaxaViability = (id, data) => ({
    type: types.UPDATE_TAXA_VIABILITY,
    payload: axios.put(`${window.location.origin}/api/taxa/viabilities/${id}`, data),
});
