import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchDebrisHabitats = (page = 1, filters = {}) => ({
    type: types.FETCH_DEBRIS_HABITATS,
    payload: axios.get(`${window.location.origin}/api/debris/habitats?${stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
});

export const fetchDebrisHabitatSelector = (filters = {}) => ({
    type: types.FETCH_DEBRIS_HABITAT_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/debris/habitats?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});


export const fetchDebrisHabitat = id => ({
    type: types.FETCH_DEBRIS_HABITAT,
    payload: axios.get(`${window.location.origin}/api/debris/habitats/${id}`),
});

export const deleteDebrisHabitat = id => ({
    type: types.DELETE_DEBRIS_HABITAT,
    payload: axios.delete(`${window.location.origin}/api/debris/habitats/${id}`),
});

export const createDebrisHabitat = data => ({
    type: types.CREATE_DEBRIS_HABITAT,
    payload: axios.post(`${window.location.origin}/api/debris/habitats/`, data),
});

export const updateDebrisHabitat = (id, data) => ({
    type: types.UPDATE_DEBRIS_HABITAT,
    payload: axios.put(`${window.location.origin}/api/debris/habitats/${id}`, data),
});
