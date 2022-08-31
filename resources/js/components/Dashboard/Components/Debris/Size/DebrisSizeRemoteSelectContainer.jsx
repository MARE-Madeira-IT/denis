import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchDebrisSizeSelector } from "../../../../../redux/debrisSize/actions";

function DebrisSizeRemoteSelectContainer({ fetchDebrisSizeSelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchDebrisSizeSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the debris size class"
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
        fetchDebrisSizeSelector: (filters) => dispatch(fetchDebrisSizeSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.debrisSize.selector,
        loading: state.debrisSize.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisSizeRemoteSelectContainer);