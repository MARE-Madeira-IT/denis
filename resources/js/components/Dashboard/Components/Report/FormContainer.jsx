import React, { useState, useEffect } from 'react'
import { Form, Modal, Steps, Button, Row } from 'antd'
import { createReport, updateReport } from "../../../../redux/report/actions";
import styled from "styled-components";
import BiologicalInformation from './Form/BiologicalInformation';
import DebrisCharacterization from './Form/DebrisCharacterization';
import ItemDetection from './Form/ItemDetection';
import Tour from "../../Hooks/Tour";
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

function FormContainer({ activeForm, setFormModal, createReport, data, setHasInitialData, updateMode, setUpdateMode, hasInitialData, updateReport, currentReport, loading }) {
    const [form] = Form.useForm();
    const [currentStep, setCurrentStep] = useState(0)
    const [numSpecies, setNumSpecies] = useState(1)
    const [formData, setFormData] = useState({})
    const [debrisFile, setDebrisFile] = useState([])

    const handleArrayToFormData = (formData, array, field) => {
        console.log(array);
        for (var i = 0; i < array.length; i++) {

            if (array[i] != undefined) {

                formData.append(`${field}[]`, array[i]);
            }

        }

        return formData;
    };

    const create = () => {
        form.validateFields().then(values => {
            var submitData = { ...formData, ...values }
            submitData.date = moment(submitData.date).format("YYYY-MM-DD");
            var formInfo = new FormData();
            console.log(submitData);
            Object.entries(submitData).map((entry) => {
                if (entry[1]) {
                    if (Array.isArray(entry[1])) {
                        if (entry[0] == "taxas") {
                            console.log(entry[1]);
                            formInfo.append('taxas', JSON.stringify(entry[1]));
                        } else {
                            handleArrayToFormData(formInfo, entry[1], entry[0]);
                        }

                    } else {
                        formInfo.append(entry[0], entry[1]);
                    }

                }
            })

            // for (var key in submitData) {
            //     if (submitData[key]) {
            //         if (Array.isArray(submitData[key])) {
            //             if (key == "taxas") {
            //                 console.log(submitData[key]);
            //                 formInfo.append('taxas', JSON.stringify(submitData[key]));
            //             } else {
            //                 handleArrayToFormData(formInfo, submitData[key], key);
            //             }

            //         } else {
            //             formInfo.append(key, submitData[key]);
            //         }

            //     }
            // }
            handleArrayToFormData(formInfo, debrisFile, 'images');


            createReport(formInfo).then(() => {
                handleCancel();
            });
        });
    };

    const updateForm = () => {
        form.validateFields().then(values => {
            var submitData = { ...formData, ...values }
            submitData.date = moment(submitData.date).format("YYYY-MM-DD");

            updateReport(currentReport.id, submitData).then(() => {
                handleCancel();
            });
        });
    };

    const submit = () => {
        if (updateMode) {
            updateForm();
        } else {
            create();
        }
    };

    const handleCancel = () => {
        setFormModal(false);
        setNumSpecies(1);
        setCurrentStep(0);
        setUpdateMode(false);
        setHasInitialData(false);
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

    useEffect(() => {
        if (hasInitialData) {
            var taxaData = [];
            data.taxas.map((currentTaxa) => {
                var currentObject = {
                    level: currentTaxa.level.id,
                    identification: currentTaxa.identification,
                    authority: currentTaxa.authority,
                    year_first_report: currentTaxa.year_first_report,
                    reference: currentTaxa.reference,
                    species_status: currentTaxa?.speciesStatus?.id,
                    population_status: currentTaxa?.populationStatus?.id,
                    abundance: currentTaxa?.abundance?.id,
                    viability: currentTaxa.viability.id,
                    asisk_score: currentTaxa.asisk_score,
                    asisk_result: currentTaxa.asisk_result,
                    maturity: currentTaxa,
                    native_region: currentTaxa,
                }
                var maturities = [], nativeRegions = [];

                currentTaxa.maturities.map((maturity) => {
                    maturities.push(maturity.id);
                })

                currentTaxa.nativeRegions.map((nativeRegion) => {
                    nativeRegions.push(nativeRegion.id);
                })

                currentObject.maturity = maturities;
                currentObject.native_region = nativeRegions;

                taxaData.push(currentObject);
            });

            setNumSpecies(taxaData.length);

            form.setFieldsValue({
                date: moment(data.date),
                latitude: data.latitude,
                longitude: data.longitude,
                doi: data.doi,
                on_going_survey: data.ongoing_survey,
                site: data.site.name,
                region: data.site.region,
                country: data?.site?.country?.name,
                lme: data?.site?.lme?.id,
                custom_id: data.custom_id,

                debris_type: data.debris.type.id,
                debris_depth: data.debris.type.depth,
                debris_habitat: data.debris.habitat.id,
                debris_size: data.debris.size.id,
                debris_weight: data?.debris?.weight,
                debris_thickness: data?.debris?.thickness?.id,
                debris_rugosity: data?.debris?.rugosity?.id,
                debris_sub_category: [data.debris.litter_category.id, data?.debris?.subcategory?.id],
                debris_marks: data.debris.marks,
                debris_origin: data.debris.origin,


                taxas: taxaData
            });
        }
    }, [hasInitialData])


    const steps = [
        <>
            <div data-intro="Each section has a title and a small description regarding the current section"
                data-title="The section"
                data-step='2'>
                <h2>Item Detection</h2>
            </div>
            <ItemDetection hasInitialData={hasInitialData} setDebrisFile={setDebrisFile} debrisFile={debrisFile} currentReport={currentReport} updateMode={updateMode} active={activeForm} form={form} />

        </>,
        <>
            <h2 style={{ marginBottom: "30px" }}>Marine Debris Characterization</h2>
            <DebrisCharacterization />
        </>,
        <>
            <p style={{ marginBottom: "30px" }}><b>IMPORTANT</b>: When multiple species grow on the same debris item, fill the "Biological identification & samples information" corresponding to the number of species. Each section corresponds to one species.</p>
            <Form.List name="taxas">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((key, name) =>
                            <BiologicalInformation
                                form={form}
                                key={key.key}
                                name={name}
                                handleDelete={() => remove(name)}
                                length={fields.length}
                            />
                        )}

                        <Row type="flex" justify='center'>
                            <Add onClick={() => add()}> Add another species</Add>
                        </Row>
                    </>
                )}
            </Form.List>


        </>
    ]

    const fieldsPerSteps = [
        ["date", "latitude", "longitude", "on_going_survey", "site", "region", "country", "lme", 'custom_id', 'doi', 'images'],
        ["debris_type", "debris_depth", "debris_habitat", "debris_size", "debris_weight", "debris_thickness", "debris_rugosity", "debris_sub_category", "debris_marks", "debris_origin"],
        ["taxa_level", "taxa_identification", "taxa_authority", "taxa_year_first_report", "taxa_reference", "taxa_species_status", "taxa_population_status", "taxa_abundance", "taxa_viability", "taxa_maturity", "taxa_native_region", 'asisk_score', 'asisk_result']
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
                    <Button loading={loading} key="submit" type="primary" onClick={currentStep == steps.length - 1 ? submit : next}>
                        {currentStep == steps.length - 1 ? "Submit" : "Next"}
                    </Button>,
                ]
            }

        >

            {activeForm != undefined &&
                <Tour itemName="reportTour">
                    <div data-intro="The form is divided into three different sections"
                        data-title="Create your report"
                        data-step='1'>


                        <Form
                            style={{ margin: "10px auto 50px auto" }}
                            layout="vertical"
                            requiredMark={false}
                            form={form}
                            initialValues={{
                                taxas: [""]
                            }}
                        >
                            {steps[currentStep]}
                        </Form>

                        <CustomSteps data-intro="You can visualize your progress using this bar"
                            data-title="Progress bar"
                            data-step='3' size="small" current={currentStep} >
                            <Step title="Item detection" />
                            <Step title="Marine Debris characterization" />
                            <Step title="Biological information" />
                        </CustomSteps>
                    </div>
                </Tour>

            }
        </CustomModal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReport: (data) => dispatch(createReport(data)),
        updateReport: (id, data) => dispatch(updateReport(id, data)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.current,
        currentReport: state.report.current
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);