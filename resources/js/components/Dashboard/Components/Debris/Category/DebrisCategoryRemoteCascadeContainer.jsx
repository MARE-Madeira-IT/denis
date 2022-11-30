import { Cascader, Select } from 'antd';
import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchDebrisCategorySelector } from "../../../../../redux/debrisCategory/actions";

function DebrisCategoryRemoteCascadeContainer({ fetchDebrisCategorySelector, data, loading, value, onChange }) {
    useEffect(() => {
        fetchDebrisCategorySelector()
    }, [])

    const filter = (inputValue, path) =>
        path.some((option) => option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    return (
        <Cascader
            value={value}
            onChange={onChange}
            options={data}
            loading={loading}
            fieldNames={{
                label: 'name',
                value: 'id',
                children: 'subcategories',
            }}
            placeholder="Master List of Categories of Litter Items"
            showSearch={{
                filter,
            }}
            onSearch={(value) => console.log(value)}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DebrisCategoryRemoteCascadeContainer);