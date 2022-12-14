import React, { useEffect } from 'react'
import { Col, Form, Input, Modal, Row, Select } from 'antd'
import { updateUser } from "../../../../redux/user/actions";
import styled from "styled-components";
import { connect } from "react-redux";


const CustomModal = styled(Modal)`
    .ant-modal-body {
        padding: 30px 60px;
    } 
`;

const requiredRule = { required: true };

function FormContainer({ visible, setVisible, currentUser, updateUser }) {
    const [form] = Form.useForm();

    const update = () => {
        form.validateFields().then(values => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("institution", values.institution);
            formData.append("country", values.country);
            formData.append("phone", values.phone);

            formData.append("_method", "PATCH");

            updateUser(currentUser.id, formData).then(() => {
                handleCancel();
            });
        });

    };

    const handleCancel = () => {
        setVisible(false);
        form.resetFields();
    };

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue({
                name: currentUser.name,
                email: currentUser.email,
                institution: currentUser.institution,
                phone: currentUser.phone,
                country: currentUser.country,
            });
        }

    }, [visible])


    return (
        <CustomModal
            width={1200}
            title="Edit user"
            visible={visible}
            onCancel={handleCancel}
            centered
            onOk={update}
        >


            <Form style={{ margin: "50px auto" }} layout="vertical" hideRequiredMark form={form}
            >
                <Row gutter={32}>
                    <Col xs={24} md={12}>
                        <Form.Item label="Name*" name="name" rules={[{ ...requiredRule, message: "'name' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label="Email*" name="email" rules={[{ ...requiredRule, message: "'email' is required" }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    {/* <Col xs={24} md={8}>
                        <Form.Item label="Role*" name="role" rules={[{ ...requiredRule, message: "'role' is required" }]}>
                            <Select>
                                <Select.Option value={1}>admin</Select.Option>
                                <Select.Option value={2}>validator</Select.Option>
                                <Select.Option value={3}>user</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col> */}
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
        updateUser: (id, data) => dispatch(updateUser(id, data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);