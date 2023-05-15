import { Upload, Modal, Row, message, Progress, Input } from 'antd';
import React, { useState } from 'react'
import { createCollection, exportTemplate } from "../../../../redux/collection/actions";
import { connect } from 'react-redux';
import styled from "styled-components";
import TextArea from 'antd/lib/input/TextArea';
import { CreateSecundary } from '../../dashboardHelper';
const { Dragger } = Upload;

const CustomModal = styled(Modal)`
    .ant-modal-body {
        padding: 30px 60px;
    } 

    p {
        margin-top: 20px;
    }

    .ant-upload-drag-icon {
        img {
            width: 50px;
            margin: auto;
            display: block;
        }
    }
`;


function ImportContainer(props) {
    const { activeForm } = props;
    const [hasUploaded, setHasUploaded] = useState(0)
    const [form, setForm] = useState({ file: undefined, doi: undefined, title: undefined, description: undefined });

    const UploadProps = {
        name: 'file',
        multiple: false,
        showUploadList: true,
        action: `${window.location.origin}/api/success`,
        accept: '.csv',
        onChange(info) {
            const { status } = info.file;

            if (status !== 'uploading') {
                console.log(info.file.percent);
            }
            if (status === 'done') {
                setHasUploaded(1);
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                setHasUploaded(2);
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        beforeUpload(currentFile) {
            setForm({ ...form, file: currentFile });
            return true;
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleCancel = () => {
        props.setActiveForm(false);
    };

    const handleCreate = () => {
        var formData = new FormData();
        formData.append('file', form.file);
        if (form.doi) {
            formData.append('doi', form.doi);
        }
        if (form.title) {
            formData.append('title', form.title);
        }

        if (form.description) {
            formData.append('description', form.description);
        }

        props.createCollection(formData).then(() => {
            handleCancel();
        });
    };


    return (
        <CustomModal
            width={720}
            title="Upload CSV"
            visible={activeForm}
            onOk={handleCreate}
            onCancel={handleCancel}
            centered
            destroyOnClose
        >
            <Dragger maxCount={1} style={{ width: "100%" }} {...UploadProps}>
                {hasUploaded ?
                    <Progress status={hasUploaded == 1 ? "success" : "exception"} style={{ marginBottom: "20px" }} type="circle" percent={100} /> :
                    <p className="ant-upload-drag-icon">
                        <img src="/images/icons/dashboard/upload.svg" alt="upload" />
                    </p>
                }

                <p className="ant-upload-text">Select a CSV file to upload</p>
                <p className="ant-upload-hint">or drag and drop it here</p>
            </Dragger>
            <br />

            <CreateSecundary
                onClick={props.exportTemplate}
                style={{ margin: "auto", display: "block" }}
            >
                Download template
            </CreateSecundary>
            <br />

            <p>Attribute a title to the collection</p>
            <Input onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title} placeholder="E.g. Study and/or publication title" />

            <p>Please provide a small description on the content of the collection</p>
            <TextArea onChange={(e) => setForm({ ...form, description: e.target.value })} value={form.description} placeholder="Summary of the species, debris, localization, or pertinent charateristics of the data" />

            <p>Would you like to associate a DOI with the records uploaded?</p>
            <Input onChange={(e) => setForm({ ...form, doi: e.target.value })} value={form.doi} placeholder="E.g. http://dx.doi.org/10.1093/ajae/aaq063" />


        </CustomModal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCollection: (data) => dispatch(createCollection(data)),
        exportTemplate: () => dispatch(exportTemplate()),
    };
};

export default connect(null, mapDispatchToProps)(ImportContainer);