import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisCategories = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_CATEGORIES,
    payload: axios.get(`${window.location.origin}/api/debris/categories?${stringify(filters, {
        arrayFormat: "index"
    })}?page=${page}`)
});

export const fetchDebrisCategory = id => ({
    type: types.FETCH_DEBRIS_CATEGORY,
    payload: axios.get(`${window.location.origin}/api/debris/categories/${id}`),
});

export const deleteDebrisCategory = id => ({
    type: types.DELETE_DEBRIS_CATEGORY,
    payload: axios.delete(`${window.location.origin}/api/debris/categories/${id}`),
});

export const createDebrisCategory = data => ({
    type: types.CREATE_DEBRIS_CATEGORY,
    payload: axios.post(`${window.location.origin}/api/debris/categories/`, data),
});

export const updateDebrisCategory = (id, data) => ({
    type: types.UPDATE_DEBRIS_CATEGORY,
    payload: axios.put(`${window.location.origin}/api/debris/categories/${id}`, data),
});
