import { Button, Divider, Input, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchDebrisMaterialSelector } from "../../../../../redux/debrisMaterial/actions";

const Add = styled.img`
    width: 16px;
    margin: auto;
    display: block;
`;

function DebrisMaterialRemoteSelectContainer({ fetchDebrisMaterialSelector, data, loading, value, onChange }) {
    const inputRef = useRef(null);
    const [other, setOther] = useState(undefined)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        fetchDebrisMaterialSelector()
    }, [])


    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the material of the debris"
            optionFilterProp="name"
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            dropdownRender={(menu) => (
                <>
                    {menu}
                    <Divider
                        style={{
                            margin: '8px 0',
                        }}
                    />
                    <Space
                        style={{
                            padding: '0 8px 4px',
                        }}
                    >
                        <Input
                            placeholder="Please enter other option"
                            ref={inputRef}
                            value={other}
                            onChange={(e) => setOther(e.target.value)}
                        />
                        <Button type="text" onClick={() => setSelected(true)}>
                            <Add alt="add" src="/images/icons/add_black.svg" />
                        </Button>
                    </Space>
                </>
            )}
        >
            {selected && <Select.Option value={other}>{other}</Select.Option>}
            {data.map((element) => (
                <Select.Option key={element.id} value={element.id}>{element.name}</Select.Option>
            ))}
        </Select>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDebrisMaterialSelector: (filters) => dispatch(fetchDebrisMaterialSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.debrisMaterial.selector,
        loading: state.debrisMaterial.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisMaterialRemoteSelectContainer);