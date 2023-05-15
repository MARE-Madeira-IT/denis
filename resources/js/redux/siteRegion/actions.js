import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchSiteRegionsSelector = (filters = {}) => ({
    type: types.FETCH_SITE_REGIONS_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/site/regions?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});
