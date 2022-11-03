import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchUsers = (page = 1, filters = {}) => ({
    type: types.FETCH_USERS,
    payload: axios.get(`${window.location.origin}/api/users?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchUser = id => ({
    type: types.FETCH_USER,
    payload: axios.get(`${window.location.origin}/api/users/${id}`),
});

export const deleteReport = id => ({
    type: types.DELETE_USER,
    payload: axios.delete(`${window.location.origin}/api/users/${id}`),
});

export const createReport = data => ({
    type: types.CREATE_USER,
    payload: axios.post(`${window.location.origin}/api/users/`, data),
});

export const updateReport = (id, data) => ({
    type: types.UPDATE_USER,
    payload: axios.put(`${window.location.origin}/api/users/${id}`, data),
});
