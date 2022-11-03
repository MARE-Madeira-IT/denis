import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaPopulationStatuses = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_POPULATION_STATUSES,
    payload: axios.get(`${window.location.origin}/api/taxa/populationstatuses?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaPopulationStatusSelector = (filters = {}) => ({
    type: types.FETCH_TAXA_POPULATION_STATUS_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/speciesstatuses?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaPopulationStatus = id => ({
    type: types.FETCH_TAXA_POPULATION_STATUS
    ,
    payload: axios.get(`${window.location.origin}/api/taxa/populationstatuses/${id}`),
});

export const deleteTaxaPopulationStatus = id => ({
    type: types.DELETE_TAXA_POPULATION_STATUS
    ,
    payload: axios.delete(`${window.location.origin}/api/taxa/populationstatuses/${id}`),
});

export const createTaxaPopulationStatus = data => ({
    type: types.CREATE_TAXA_POPULATION_STATUS
    ,
    payload: axios.post(`${window.location.origin}/api/taxa/populationstatuses/`, data),
});

export const updateTaxaPopulationStatus = (id, data) => ({
    type: types.UPDATE_TAXA_POPULATION_STATUS
    ,
    payload: axios.put(`${window.location.origin}/api/taxa/populationstatuses/${id}`, data),
});
