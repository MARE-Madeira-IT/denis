import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaAbundanceSelector } from "../../../../../redux/taxaAbundance/actions";

function TaxaAbundanceRemoteSelectContainer({ fetchTaxaAbundanceSelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaAbundanceSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the species abundance"
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
        fetchTaxaAbundanceSelector: (filters) => dispatch(fetchTaxaAbundanceSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaAbundance.selector,
        loading: state.taxaAbundance.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaAbundanceRemoteSelectContainer);