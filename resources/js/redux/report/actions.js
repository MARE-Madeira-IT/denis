import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchReports = (page = 1, filters = {}) => ({
    type: types.FETCH_REPORTS,
    payload: axios.get(`${window.location.origin}/api/reports?${stringify(filters, {
        arrayFormat: "index"
    })}?page=${page}`)
});

export const fetchReport = id => ({
    type: types.FETCH_REPORT,
    payload: axios.get(`${window.location.origin}/api/reports/${id}`),
});

export const deleteReport = id => ({
    type: types.DELETE_REPORT,
    payload: axios.delete(`${window.location.origin}/api/reports/${id}`),
});

export const createReport = data => ({
    type: types.CREATE_REPORT,
    payload: axios.post(`${window.location.origin}/api/reports/`, data),
});

export const updateReport = (id, data) => ({
    type: types.UPDATE_REPORT,
    payload: axios.put(`${window.location.origin}/api/reports/${id}`, data),
});
