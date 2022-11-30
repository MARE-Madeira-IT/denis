import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaMaturities = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_MATURITIES,
    payload: axios.get(`${window.location.origin}/api/taxa/maturities?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaMaturitySelector = (filters = {}) => ({
    type: types.FETCH_TAXA_MATURITY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/maturities?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaMaturity = id => ({
    type: types.FETCH_TAXA_MATURITY,
    payload: axios.get(`${window.location.origin}/api/taxa/maturities/${id}`),
});

export const deleteTaxaMaturity = id => ({
    type: types.DELETE_TAXA_MATURITY,
    payload: axios.delete(`${window.location.origin}/api/taxa/maturities/${id}`),
    meta: { id }
});

export const createTaxaMaturity = data => ({
    type: types.CREATE_TAXA_MATURITY,
    payload: axios.post(`${window.location.origin}/api/taxa/maturities/`, data),
});

export const updateTaxaMaturity = (id, data) => ({
    type: types.UPDATE_TAXA_MATURITY,
    payload: axios.put(`${window.location.origin}/api/taxa/maturities/${id}`, data),
});
