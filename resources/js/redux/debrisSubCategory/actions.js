import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisSubCategories = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_SUB_CATEGORIES,
    payload: axios.get(`${window.location.origin}/api/debris/subcategories?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisSubCategory = id => ({
    type: types.FETCH_DEBRIS_SUB_CATEGORY,
    payload: axios.get(`${window.location.origin}/api/debris/subcategories/${id}`),
});

export const deleteDebrisSubCategory = id => ({
    type: types.DELETE_DEBRIS_SUB_CATEGORY,
    payload: axios.delete(`${window.location.origin}/api/debris/subcategories/${id}`),
    meta: { id }
});

export const createDebrisSubCategory = data => ({
    type: types.CREATE_DEBRIS_SUB_CATEGORY,
    payload: axios.post(`${window.location.origin}/api/debris/subcategories/`, data),
});

export const updateDebrisSubCategory = (id, data) => ({
    type: types.UPDATE_DEBRIS_SUB_CATEGORY,
    payload: axios.put(`${window.location.origin}/api/debris/subcategories/${id}`, data),
});
