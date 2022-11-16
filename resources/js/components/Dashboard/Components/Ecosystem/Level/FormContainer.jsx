import { Col, Form, Input, Row } from 'antd'
import React from 'react'
import styled from "styled-components";

const Container = styled(Form)`
    flex: 1;

    .input {               
        height: 100%;
        box-sizing: border-box;
        margin: auto 0px;
    }

    .ant-row, .ant-form-item-control-input {
        margin-bottom: 0px;
        height: 100%;
    }

    .ant-form-item {
        margin-bottom: 0px;
    }
`;


const requiredRule = [{ required: true, message: "Name is required" }];

function FormContainer({ form }) {

    return (
        <Container form={form}>
            <Row>
                <Col span={24}>
                    <Form.Item name="name" rules={requiredRule}>
                        <Input prefix={<img src="/icons/form/fish.svg" />} className='input' bordered={false} placeholder='Name' />
                    </Form.Item>
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer