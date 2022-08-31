import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaViabilitySelector } from "../../../../../redux/taxaViability/actions";

function TaxaViabilityRemoteSelectContainer({ fetchTaxaViabilitySelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaViabilitySelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the viability"
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
        fetchTaxaViabilitySelector: (filters) => dispatch(fetchTaxaViabilitySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaViability.selector,
        loading: state.taxaViability.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaViabilityRemoteSelectContainer);