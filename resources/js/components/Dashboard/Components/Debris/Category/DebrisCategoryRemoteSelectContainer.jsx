import { Cascader, Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchDebrisCategorySelector } from "../../../../../redux/debrisCategory/actions";

function DebrisCategoryRemoteSelectContainer({ fetchDebrisCategorySelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchDebrisCategorySelector()
    }, [])

    const filter = (inputValue, path) =>
        path.some((option) => option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            bordered={false}
            prefix={<img src="/icons/form/bottle.svg" />}
            placeholder="Select the debris category"
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
        fetchDebrisCategorySelector: (filters) => dispatch(fetchDebrisCategorySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.debrisCategory.selector,
        loading: state.debrisCategory.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisCategoryRemoteSelectContainer);