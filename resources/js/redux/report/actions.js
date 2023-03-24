import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";
import { download } from "../../helper";

export const fetchReports = (page = 1, filters = {}) => ({
    type: types.FETCH_REPORTS,
    payload: axios.get(`${window.location.origin}/api/reports?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchReportsCoordinates = () => ({
    type: types.FETCH_REPORTS_COORDINATES,
    payload: axios.get(`${window.location.origin}/api/map-reports`)
});

export const fetchReportGraph = () => ({
    type: types.FETCH_REPORT_GRAPH,
    payload: axios.get(`${window.location.origin}/api/reports/graph`)
});



export const fetchSelfReports = (page = 1, filters = {}) => ({
    type: types.FETCH_SELF_REPORTS,
    payload: axios.get(`${window.location.origin}/api/self-reports/?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchReport = id => ({
    type: types.FETCH_REPORT,
    payload: axios.get(`${window.location.origin}/api/reports/${id}`),
});

export const deleteReport = id => ({
    type: types.DELETE_REPORT,
    payload: axios.delete(`${window.location.origin}/api/reports/${id}`),
    meta: { id }
});

export const createReport = data => ({
    type: types.CREATE_REPORT,
    payload: axios.post(`${window.location.origin}/api/reports`, data),
});

export const updateReport = (id, data) => ({
    type: types.UPDATE_REPORT,
    payload: axios.put(`${window.location.origin}/api/reports/${id}`, data),
});


export const updateState = data => ({
    type: types.UPDATE_STATE,
    payload: axios.post(`${window.location.origin}/api/validation/`, data),
});

export const setCurrentReport = data => ({
    type: types.SET_CURRENT_STATE,
    payload: data,
});

export const exportReports = (filters = {}) => ({
    type: types.EXPORT_REPORTS,
    payload: axios({
        url: `${window.location.origin}/api/export/reports?${stringify(filters, {
            arrayFormat: "index"
        })}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, 'reports.csv')
        },
        error => {
            return error.data;
        }
    ),
    meta: { globalError: true }
});