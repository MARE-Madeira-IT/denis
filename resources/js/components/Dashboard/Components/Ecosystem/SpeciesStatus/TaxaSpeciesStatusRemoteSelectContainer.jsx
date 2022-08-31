import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaSpeciesStatusSelector } from "../../../../../redux/taxaSpeciesStatus/actions";

function TaxaSpeciesStatusRemoteSelectContainer({ fetchTaxaSpeciesStatusSelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaSpeciesStatusSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the species status"
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
        fetchTaxaSpeciesStatusSelector: (filters) => dispatch(fetchTaxaSpeciesStatusSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaSpeciesStatus.selector,
        loading: state.taxaSpeciesStatus.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaSpeciesStatusRemoteSelectContainer);