import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchSiteLmesSelector = (filters = {}) => ({
    type: types.FETCH_SITE_LMES_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/site/lmes?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});
