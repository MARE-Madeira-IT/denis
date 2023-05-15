import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchSitesSelector = (filters = {}) => ({
    type: types.FETCH_SITES_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/site?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});
