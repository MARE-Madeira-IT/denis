import { Button, Divider, Input, Tooltip, Select, Space, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { connect } from "react-redux";
import styled from "styled-components";
import { fetchDebrisRugositySelector } from "../../../../../redux/debrisRugosity/actions";

const Add = styled.img`
    width: 16px;
    margin: auto;
    display: block;
`;

const CustomTooltip = styled(Tooltip)`
    cursor: pointer;
    width: 15px;
    height: 15px;

    img {
        width: 50px;
        height: 50px;
    }
`;


function DebrisRugosityRemoteSelectContainer({ fetchDebrisRugositySelector, data, loading, value, onChange }) {
    const inputRef = useRef(null);
    const [other, setOther] = useState(undefined)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        fetchDebrisRugositySelector()
    }, [])

    return (
        <Select
            value={value}
            onChange={onChange}
            loading={loading}
            showSearch
            placeholder="Select the rugosity of the debris"
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
                <Select.Option key={element.id} value={element.id}>
                    {/* <Row type="flex" justify='space-between'> */}
                    {element.name}

                    {/* {element.name != "other" &&
                            <CustomTooltip placement='right' title={(<img src={"/images/rugosity/" + element.id + ".jpg"} />)}><img src="/images/icons/form/tooltip.svg" /></CustomTooltip>
                        } */}

                    {/* </Row> */}
                </Select.Option>
            ))
            }
        </Select >
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