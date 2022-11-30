import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaSpeciesStatuses = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_SPECIES_STATUSES,
    payload: axios.get(`${window.location.origin}/api/taxa/speciesstatuses?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaSpeciesStatusSelector = (filters = {}) => ({
    type: types.FETCH_TAXA_SPECIES_STATUS_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/speciesstatuses?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaSpeciesStatus = id => ({
    type: types.FETCH_TAXA_SPECIES_STATUS
    ,
    payload: axios.get(`${window.location.origin}/api/taxa/speciesstatuses/${id}`),
});

export const deleteTaxaSpeciesStatus = id => ({
    type: types.DELETE_TAXA_SPECIES_STATUS,
    payload: axios.delete(`${window.location.origin}/api/taxa/speciesstatuses/${id}`),
    meta: { id }
});

export const createTaxaSpeciesStatus = data => ({
    type: types.CREATE_TAXA_SPECIES_STATUS
    ,
    payload: axios.post(`${window.location.origin}/api/taxa/speciesstatuses/`, data),
});

export const updateTaxaSpeciesStatus = (id, data) => ({
    type: types.UPDATE_TAXA_SPECIES_STATUS
    ,
    payload: axios.put(`${window.location.origin}/api/taxa/speciesstatuses/${id}`, data),
});
