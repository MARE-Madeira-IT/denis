import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchDebrisTypeSelector } from "../../../../../redux/debrisType/actions";

function DebrisTypeRemoteSelectContainer({ fetchDebrisTypeSelector, data, loading }) {
    useEffect(() => {
        fetchDebrisTypeSelector()
    }, [])


    return (
        <Select
            loading={loading}
            showSearch
            placeholder="Select the debris type"
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
        fetchDebrisTypeSelector: (filters) => dispatch(fetchDebrisTypeSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.debrisType.selector,
        loading: state.debrisType.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisTypeRemoteSelectContainer);