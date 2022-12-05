import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisMaterials = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_MATERIALS,
    payload: axios.get(`${window.location.origin}/api/debris/materials?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisMaterialSelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_MATERIAL_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/materials?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const fetchDebrisMaterial = id => ({
    type: types.FETCH_DEBRIS_MATERIAL,
    payload: axios.get(`${window.location.origin}/api/debris/materials/${id}`),
});

export const deleteDebrisMaterial = id => ({
    type: types.DELETE_DEBRIS_MATERIAL,
    payload: axios.delete(`${window.location.origin}/api/debris/materials/${id}`),
    meta: { id }
});

export const createDebrisMaterial = data => ({
    type: types.CREATE_DEBRIS_MATERIAL,
    payload: axios.post(`${window.location.origin}/api/debris/materials`, data),
});

export const updateDebrisMaterial = (id, data) => ({
    type: types.UPDATE_DEBRIS_MATERIAL,
    payload: axios.put(`${window.location.origin}/api/debris/materials/${id}`, data),
});
