import React from 'react'
import { Col, Form, Input, DatePicker, Row } from 'antd'
import CountryRemoteSelectContainer from '../../Site/Country/CountryRemoteSelectContainer'
import LmeRemoteSelectContainer from '../../Site/Lme/LmeRemoteSelectContainer'

const requiredRule = [{ required: true }];

function ItemDetection() {
    return (
        <Row type="flex" gutter={32}>
            <Col xs={24} md={6}>
                <Form.Item label="Date of survey*" name="date" rules={requiredRule}>
                    <DatePicker style={{ width: "100%" }} placeholder="Date" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Latitude*" name="latitude" rules={requiredRule}>
                    <Input placeholder="Latitude" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Longitude*" name="longitude" rules={requiredRule}>
                    <Input placeholder="Longitude" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Ongoing Surveys Modality" name="on_going_survey" rules={[{ required: false }]}>
                    <Input placeholder="Ex.: Diving transect (25 m)" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Site name*" name="site" rules={requiredRule}>
                    <Input placeholder="Site" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Region/Province*" name="region" rules={requiredRule}>
                    <Input placeholder="Region/Province" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Country*" name="country" rules={requiredRule}>
                    <CountryRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Large marine ecosystem*" name="lme" rules={requiredRule}>
                    <LmeRemoteSelectContainer />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default ItemDetection