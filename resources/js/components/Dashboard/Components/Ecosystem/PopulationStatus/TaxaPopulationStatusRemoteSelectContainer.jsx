import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaPopulationStatusSelector } from "../../../../../redux/taxaPopulationStatus/actions";

function TaxaPopulationStatusRemoteSelectContainer({ fetchTaxaPopulationStatusSelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaPopulationStatusSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the population status"
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
        fetchTaxaPopulationStatusSelector: (filters) => dispatch(fetchTaxaPopulationStatusSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaPopulationStatus.selector,
        loading: state.taxaPopulationStatus.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaPopulationStatusRemoteSelectContainer);