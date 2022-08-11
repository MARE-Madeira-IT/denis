import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchSiteCountriesSelector } from "../../../../../redux/siteCountry/actions";

function CountryRemoteSelectContainer({ fetchSiteCountriesSelector, data, loading }) {
    useEffect(() => {
        fetchSiteCountriesSelector()
    }, [])


    return (
        <Select
            loading={loading}
            showSearch
            placeholder="Select a country"
            optionFilterProp="name"
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            {data.map((element) => (
                <Select.Option key={element.id} value={element.id}>{element.name}</Select.Option>
            ))}
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSiteCountriesSelector: (filters) => dispatch(fetchSiteCountriesSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.siteCountry.selector,
        loading: state.siteCountry.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryRemoteSelectContainer);