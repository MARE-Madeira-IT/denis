import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaLevelSelector } from "../../../../../redux/taxaLevel/actions";

function TaxaLevelRemoteSelectContainer({ fetchTaxaLevelSelector, data, loading }) {
    useEffect(() => {
        fetchTaxaLevelSelector()
    }, [])


    return (
        <Select
            loading={loading}
            showSearch
            placeholder="Select the highest taxonomic level"
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
        fetchTaxaLevelSelector: (filters) => dispatch(fetchTaxaLevelSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaLevel.selector,
        loading: state.taxaLevel.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaLevelRemoteSelectContainer);