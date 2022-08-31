import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaMaturitySelector } from "../../../../../redux/taxaMaturity/actions";

function TaxaMaturityRemoteSelectContainer({ fetchTaxaMaturitySelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaMaturitySelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            mode="multiple"
            placeholder="Select all existing maturity stages"
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
        fetchTaxaMaturitySelector: (filters) => dispatch(fetchTaxaMaturitySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaMaturity.selector,
        loading: state.taxaMaturity.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaMaturityRemoteSelectContainer);