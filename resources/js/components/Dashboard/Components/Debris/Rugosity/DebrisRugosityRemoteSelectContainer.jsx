import { Button, Divider, Input, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchDebrisRugositySelector } from "../../../../../redux/debrisRugosity/actions";

const Add = styled.img`
    width: 16px;
    margin: auto;
    display: block;
`;

function DebrisRugosityRemoteSelectContainer({ fetchDebrisRugositySelector, data, loading }) {
    const inputRef = useRef(null);
    const [other, setOther] = useState(undefined)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        fetchDebrisRugositySelector()
    }, [])


    return (
        <Select
            loading={loading}
            showSearch
            placeholder="Select the habitat of the finding"
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
                            <Add alt="add" src="/icons/add_black.svg" />
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
        fetchDebrisRugositySelector: (filters) => dispatch(fetchDebrisRugositySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.debrisRugosity.selector,
        loading: state.debrisRugosity.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisRugosityRemoteSelectContainer);