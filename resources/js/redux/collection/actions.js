import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";
import { download } from "../../helper";

export const fetchCollections = (page = 1, filters = {}) => ({
    type: types.FETCH_COLLECTIONS,
    payload: axios.get(`${window.location.origin}/api/collections?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchCollectionsCoordinates = () => ({
    type: types.FETCH_COLLECTIONS_COORDINATES,
    payload: axios.get(`${window.location.origin}/api/map-collections`)
});

export const fetchSelfCollections = (page = 1, filters = {}) => ({
    type: types.FETCH_SELF_COLLECTIONS,
    payload: axios.get(`${window.location.origin}/api/self-collections/?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchCollection = id => ({
    type: types.FETCH_COLLECTION,
    payload: axios.get(`${window.location.origin}/api/collections/${id}`),
});

export const deleteCollection = id => ({
    type: types.DELETE_COLLECTION,
    payload: axios.delete(`${window.location.origin}/api/collections/${id}`),
    meta: { id }
});

export const createCollection = data => ({
    type: types.CREATE_COLLECTION,
    payload: axios.post(`${window.location.origin}/api/collections`, data),
});

export const updateCollection = (id, data) => ({
    type: types.UPDATE_COLLECTION,
    payload: axios.put(`${window.location.origin}/api/collections/${id}`, data),
});

export const setCurrentCollection = data => ({
    type: types.SET_CURRENT_STATE,
    payload: data,
});

export const exportTemplate = () => ({
    type: types.EXPORT_TEMPLATE,
    payload: axios({
        url: `${window.location.origin}/api/export/template`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, 'template.xlsx')
        },
        error => {
            return error.data;
        }
    ),
    meta: { globalError: true }
});

export const exportCollection = (filters = {}) => ({
    type: types.EXPORT_COLLECTION,
    payload: axios({
        url: `${window.location.origin}/api/export/reports?${stringify(filters, {
            arrayFormat: "index"
        })}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, 'collections.csv')
        },
        error => {
            return error.data;
        }
    ),
    meta: { globalError: true }
});