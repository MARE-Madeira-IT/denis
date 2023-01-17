import React, { useState, useEffect } from 'react'
import { Alert, Button, Form, Input, message, Modal, Upload } from 'antd';
import styled from 'styled-components';
import { connect } from "react-redux";
import { updateUser } from "../../../redux/user/actions";
import { setCurrentUser } from "../../../redux/auth/actions";

const Container = styled(Modal)`
    .ant-upload  {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 50px auto;
    display: block;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        filter: brightness(.6);
    }
`;

function UserForm({ visible, setVisible, user, updateUser, setCurrentUser }) {
    const [form] = Form.useForm();
    const [previewImage, setPreviewImage] = useState(user.image)
    const [initialValues, setInitialValues] = useState({})
    const [errors, setErrors] = useState([])

    useEffect(() => {
        setPreviewImage(user.image);
    }, [user.image])

    useEffect(() => {
        var aInitialValeus = {
            name: user.name,
            email: user.email,
            institution: user.institution,
            country: user.country,
            phone: user.phone,
        };
        setInitialValues(aInitialValeus)
        form.setFieldsValue(aInitialValeus);
    }, [user])


    const onFinish = () => {
        form.validateFields().then((values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("institution", values.institution);
            formData.append("country", values.country);
            values.phone &&
                formData.append("phone", values.phone);
            if (values.image) {
                formData.append("image", values.image);
            }

            formData.append("_method", "PATCH");

            updateUser(user.id, formData).then((response) => {
                onCancel();
                setErrors([]);
                setCurrentUser(response.action.payload);
            }).catch((err) => {
                var response = err.response.data.errors;
                var aErrors = [];
                Object.values(response).map((item) => {
                    aErrors.push(item);
                })
                setErrors(aErrors);
            });
        })

    };

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function dummyRequest({ file, onSuccess }) {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    };


    const handleChange = (info) => {
        getBase64(info.file.originFileObj, (imageUrl) => {
            form.setFieldsValue({ image: info.file.originFileObj });
            setPreviewImage(imageUrl);
        });
    };

    const onCancel = () => {
        form.setFieldsValue(initialValues);
        setVisible(false);
    };

    return (
        <Container
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={onFinish}>
                    Submit
                </Button>,
            ]}
            destroyOnClose
            title="Update profile"
            visible={visible}
            onCancel={() => setVisible(false)}
        >
            <Form
                form={form}
                name="control-hooks"
            >
                <Form.Item name="image"
                >
                    <Upload
                        accept=".jpeg, .jpg"
                        customRequest={dummyRequest}
                        beforeUpload={(file) => {
                            const isJPEG = file.type === 'image/jpeg';
                            if (!isJPEG) {
                                message.error(`${file.name} is not a jpeg file`);
                            }
                            return isJPEG || Upload.LIST_IGNORE;
                        }}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    >

                        <Image src={previewImage} alt="profile image" />

                    </Upload>
                </Form.Item>

                {errors.length ? <Alert
                    message="Request failed"
                    description={errors.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                    type="error"
                    closable
                /> : <></>}
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: "Name is required" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Email is required" }, { type: "email", }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="institution"
                    label="Institution"
                    rules={[{ required: true, message: "Institution is required" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="country"
                    label="Localization"
                    rules={[{ required: true, message: "Localization is required" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[{ required: false }]}
                >
                    <Input />
                </Form.Item>


            </Form >
        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (id, data) => dispatch(updateUser(id, data)),
        setCurrentUser: (payload) => dispatch(setCurrentUser(payload)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.selfData,
        user: state.auth.currentUser,
        meta: state.report.selfMeta,
        current: state.drawer.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);