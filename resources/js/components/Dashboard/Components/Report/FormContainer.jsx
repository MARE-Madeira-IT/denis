import React, { useState } from 'react'
import { Form, Modal, Steps, Button, Row } from 'antd'
import { createReport } from "../../../../redux/report/actions";
import styled from "styled-components";
import BiologicalInformation from './Form/BiologicalInformation';
import DebrisCharacterization from './Form/DebrisCharacterization';
import ItemDetection from './Form/ItemDetection';
import { dimensions } from '../../dashboardHelper';
import { connect } from "react-redux";
import moment from 'moment';

const { Step } = Steps;

const CustomModal = styled(Modal)`
    .ant-modal-body {
        padding: 30px 60px;
    } 
`;

const CustomSteps = styled(Steps)`
    width: 90%;
    margin: auto;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;



const Add = styled.button`
    padding: 1em 1.5em;
    transition: outline 1s ease;
    border: none;
    color: #777;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
    position: relative;

    &::after, &::before {
        content: '';
        display: block;
        position: absolute;
        width: 20%;
        height: 20%;
        border: 2px solid;
        transition: all 0.6s ease;
        border-radius: 2px;
    }

    &::before {
        top: 0;
        left: 0;
        border-bottom-color: transparent;
        border-right-color: transparent;
        border-top-color: #777;
        border-left-color: #777;
    }

    &::after {
        bottom: 0;
        right: 0;
        border-top-color: transparent;
        border-left-color: transparent;
        border-bottom-color: #777;
        border-right-color: #777;
    }

    &:hover {
        &::after, &::before {
            width: 100%;
            height: 100%;
        }
    }
    
`;

function FormContainer({ activeForm, setFormModal, createReport }) {
    const [form] = Form.useForm();
    const [currentStep, setCurrentStep] = useState(0)
    const [numSpecies, setNumSpecies] = useState(1)
    const [formData, setFormData] = useState({})

    const create = () => {
        form.validateFields().then(values => {
            var submitData = { ...formData, ...values }
            submitData.date = moment(submitData.date).format("YYYY-MM-DD");
            createReport(submitData);
            // if (!err) {
            //     createMareDepth(values).then(data => {
            //         handleCancel();
            //     });
            // }
        });
    };

    const handleCancel = () => {
        setFormModal(false);
        setNumSpecies(1);
        currentStep(0)
        form.resetFields();
    };

    const previous = () => {
        setCurrentStep(currentStep - 1);
    };

    const next = () => {
        form.validateFields(fieldsPerSteps[currentStep]).then(values => {
            setFormData({ ...formData, ...values })
            setCurrentStep(currentStep + 1);
        })

    };

    const steps = [
        <ItemDetection />,
        <DebrisCharacterization />,
        <>
            <p><b>IMPORTANT</b>: When multiple species grow on the same debris item, fill the "Biological identification & samples information" corresponding to the number of species. Each section corresponds to one species.</p>
            <Form.List name="taxas">
                {() => (
                    <>
                        {[...Array(numSpecies)].map((p, index) =>
                            <Form.List key={index} name={index}>
                                {() => (
                                    <>
                                        <BiologicalInformation handleDelete={() => setNumSpecies(numSpecies - 1)} last={index == numSpecies - 1 && index != 0} />
                                    </>
                                )}
                            </Form.List>
                        )}
                    </>
                )}
            </Form.List>
            <Row type="flex" justify='center'>
                <Add onClick={() => setNumSpecies(numSpecies + 1)}> Add another species</Add>
            </Row>

        </>
    ]

    const fieldsPerSteps = [
        ["date", "latitude", "longitude", "on_going_survey", "site", "region", "country", "lme"],
        ["debris_type", "debris_depth", "debris_habitat", "debris_material", "debris_size", "debris_weight", "debris_thickness", "debris_rugosity", "debris_sub_category", "debris_marks", "debris_origin"],
        ["taxa_level", "taxa_identification", "taxa_authority", "taxa_year_first_report", "taxa_reference", "taxa_species_status", "taxa_population_status", "taxa_abundance", "taxa_viability", "taxa_maturity", "taxa_native_region"]
    ]

    return (
        <CustomModal
            width={1200}
            title="Create report"
            visible={activeForm}
            onCancel={handleCancel}
            centered
            footer={
                [
                    <Button key="back" disabled={currentStep == 0} onClick={previous}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" onClick={currentStep == steps.length - 1 ? create : next}>
                        {currentStep == steps.length - 1 ? "Submit" : "Next"}
                    </Button>,
                ]
            }

        >
            {activeForm != undefined &&
                <>
                    <CustomSteps size="small" current={currentStep} onChange={(step) => setCurrentStep(step)}>
                        <Step title="Item detection" />
                        <Step title="Marine Debris characterization" />
                        <Step title="Biological information" />
                    </CustomSteps>

                    <Form style={{ margin: "50px auto" }} layout="vertical" hideRequiredMark form={form}>
                        {steps[currentStep]}
                    </Form>
                </>
            }
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