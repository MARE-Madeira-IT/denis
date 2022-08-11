import { Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchSiteLmesSelector } from "../../../../../redux/siteLme/actions";

function LmeRemoteSelectContainer({ fetchSiteLmesSelector, data, loading }) {
    useEffect(() => {
        fetchSiteLmesSelector()
    }, [])


    return (
        <Select
            loading={loading}
            showSearch
            placeholder="Select a large marine ecosystem"
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
        fetchSiteLmesSelector: (filters) => dispatch(fetchSiteLmesSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.siteLme.selector,
        loading: state.siteLme.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LmeRemoteSelectContainer);