import { Col, Form, Input, InputNumber, Row } from 'antd'
import React from 'react'
import CustomTooltip from './CustomTooltip'

function PublicationDetails() {


    return (
        <Row align='middle' type="flex" gutter={32}>
            <Col xs={24} md={12}>
                <Form.Item label="Title of publication" name="title_publication" rules={[{ required: false }]}>
                    <Input placeholder="DeNIS: a global database on anthropogenic marine Debris and Non-Indigenous Species" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Journal of publication" name="journal_publication" rules={[{ required: false }]}>
                    <Input placeholder="Authorea" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="First author" name="first_author" rules={[{ required: false }]}>
                    <Input placeholder="Canning-Clode, J." />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="List of authors" name="authors" rules={[{ required: false }]}>
                    <Input placeholder="Canning-Clode J., Freitas R., Barry P., Broeg K., Carlton J., Copp G., Davison P., ..." />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label={(
                    <>
                        <span>Digital object identifier</span>
                        <CustomTooltip text="DeNIS is used as a data repository, for already published work and submitted papers. A DOI, or Digital Object Identifier, is an identifier of such content on the web." />

                    </>)} name="doi" rules={[{ required: false }]}>
                    <Input placeholder="Ex.: 10.1080/15588742.2015" />
                </Form.Item>
            </Col>


            <Col xs={24} md={6}>
                <Form.Item label="Year of publication" name="year_publication" rules={[{ required: false }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="2023" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Volume" name="volume_publication" rules={[{ required: false }]}>
                    <Input placeholder="Eg.: 1" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Page(s)" name="pages_publication" rules={[{ required: false }]}>
                    <Input placeholder="Eg.: 1-2pps" />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default PublicationDetails