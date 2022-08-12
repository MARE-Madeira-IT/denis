import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaAbundances = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_ABUNDANCES,
    payload: axios.get(`${window.location.origin}/api/taxa/abundances?${stringify(filters, {
        arrayFormat: "index"
    })}?page=${page}`)
});

export const fetchTaxaAbundanceSelector = (filters = {}) => ({
    type: types.FETCH_TAXA_ABUNDANCE_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/abundances?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaAbundance = id => ({
    type: types.FETCH_TAXA_ABUNDANCE,
    payload: axios.get(`${window.location.origin}/api/taxa/abundances/${id}`),
});

export const deleteTaxaAbundance = id => ({
    type: types.DELETE_TAXA_ABUNDANCE,
    payload: axios.delete(`${window.location.origin}/api/taxa/abundances/${id}`),
});

export const createTaxaAbundance = data => ({
    type: types.CREATE_TAXA_ABUNDANCE,
    payload: axios.post(`${window.location.origin}/api/taxa/abundances/`, data),
});

export const updateTaxaAbundance = (id, data) => ({
    type: types.UPDATE_TAXA_ABUNDANCE,
    payload: axios.put(`${window.location.origin}/api/taxa/abundances/${id}`, data),
});
