import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchTaxaNativeRegions = (page = 1, filters = {}) => ({
    type: types.FETCH_TAXA_NATIVE_REGIONS,
    payload: axios.get(`${window.location.origin}/api/taxa/nativeregions?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchTaxaNativeRegionSelector = (filters = {}) => ({
    type: types.FETCH_TAXA_NATIVE_REGION_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/taxa/nativeregions?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchTaxaNativeRegion = id => ({
    type: types.FETCH_TAXA_NATIVE_REGION,
    payload: axios.get(`${window.location.origin}/api/taxa/nativeregions/${id}`),
});

export const deleteTaxaNativeRegion = id => ({
    type: types.DELETE_TAXA_NATIVE_REGION,
    payload: axios.delete(`${window.location.origin}/api/taxa/nativeregions/${id}`),
    meta: { id }
});

export const createTaxaNativeRegion = data => ({
    type: types.CREATE_TAXA_NATIVE_REGION,
    payload: axios.post(`${window.location.origin}/api/taxa/nativeregions/`, data),
});

export const updateTaxaNativeRegion = (id, data) => ({
    type: types.UPDATE_TAXA_NATIVE_REGION,
    payload: axios.put(`${window.location.origin}/api/taxa/nativeregions/${id}`, data),
});
