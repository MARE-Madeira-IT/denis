import React, { useState } from 'react'
import { Col, Form, Input, Modal, Row, Select } from 'antd'
import { createReport } from "../../../../redux/report/actions";
import styled from "styled-components";
import { connect } from "react-redux";


const CustomModal = styled(Modal)`
    .ant-modal-body {
        padding: 30px 60px;
    } 
`;

const requiredRule = { required: true };

function FormContainer({ visible, setVisible, currentUser, createReport }) {
    const [form] = Form.useForm();

    const update = () => {
        form.validateFields().then(values => {
            createReport(values).then(() => {
                handleCancel();
            });
        });
    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };



    return (
        <CustomModal
            width={1200}
            title="Edit user"
            visible={visible}
            onCancel={handleCancel}
            centered
            onOk={update}
        >


            <Form initialValues={{
                name: currentUser.name,
                email: currentUser.email,
                institution: currentUser.institution,
                phone: currentUser.phone,
                country: currentUser.country,
            }} style={{ margin: "50px auto" }} layout="vertical" hideRequiredMark form={form}
            >
                <Row gutter={32}>
                    <Col xs={24} md={8}>
                        <Form.Item label="Name*" name="name" rules={[{ ...requiredRule, message: "'name' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label="Email*" name="email" rules={[{ ...requiredRule, message: "'email' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label="Role*" name="role" rules={[{ ...requiredRule, message: "'role' is required" }]}>
                            <Select>
                                <Select.Option value={1}>admin</Select.Option>
                                <Select.Option value={2}>validator</Select.Option>
                                <Select.Option value={3}>user</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label="Institution*" name="institution" rules={[{ ...requiredRule, message: "'institution' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label="Localization*" name="country" rules={[{ ...requiredRule, message: "'localization' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={8}>
                        <Form.Item label="Phone" name="phone" >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>


        </CustomModal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReport: (data) => dispatch(createReport(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);