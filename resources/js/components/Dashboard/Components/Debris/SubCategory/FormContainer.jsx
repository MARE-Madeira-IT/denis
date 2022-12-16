import { Col, Form, Input, Row } from 'antd'
import React from 'react'
import styled from "styled-components";
import DebrisCategoryRemoteSelectContainer from '../Category/DebrisCategoryRemoteSelectContainer';

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

function FormContainer({ form }) {

    return (
        <Container form={form}>
            <Row>
                <Col span={8}>
                    <Form.Item name="name" rules={[{ required: true, message: "Name is required" }]}>
                        <Input prefix={<img src="/images/icons/form/bottle.svg" />} className='input' bordered={false} placeholder='Name' />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item name="mdi_code" rules={[{ required: true, message: "MDI code is required" }]}>
                        <Input prefix={<img src="/images/icons/form/code.svg" />} className='input' bordered={false} placeholder='MDI code' />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item name="debris_category_id" rules={[{ required: true, message: "Category is required" }]}>
                        <DebrisCategoryRemoteSelectContainer placeholder='Category' />
                    </Form.Item>
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer