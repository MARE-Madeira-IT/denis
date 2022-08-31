import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchTaxaNativeRegionSelector } from "../../../../../redux/taxaNativeRegion/actions";

function TaxaNativeRegionRemoteSelectContainer({ fetchTaxaNativeRegionSelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchTaxaNativeRegionSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the biological sample native region"
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
        fetchTaxaNativeRegionSelector: (filters) => dispatch(fetchTaxaNativeRegionSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.taxaNativeRegion.selector,
        loading: state.taxaNativeRegion.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaNativeRegionRemoteSelectContainer);