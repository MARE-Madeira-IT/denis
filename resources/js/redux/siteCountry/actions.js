import { types } from "./types";
import axios from "axios";
import { stringify } from "query-string";

export const fetchSiteCountriesSelector = (filters = {}) => ({
    type: types.FETCH_SITE_COUNTRIES_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/site/countries?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});
