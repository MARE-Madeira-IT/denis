import React, { useState } from 'react'
import { Form, Modal, Row, Col, Input, DatePicker, Steps, Button, InputNumber } from 'antd'
import CountryRemoteSelectContainer from '../Site/Country/CountryRemoteSelectContainer';
import LmeRemoteSelectContainer from '../Site/Lme/LmeRemoteSelectContainer';
import DebrisTypeRemoteSelectContainer from '../Debris/Type/DebrisTypeRemoteSelectContainer';
import DebrisHabitatRemoteSelectContainer from '../Debris/Habitat/DebrisHabitatRemoteSelectContainer';
import DebrisMaterialRemoteSelectContainer from '../Debris/Material/DebrisMaterialRemoteSelectContainer';
import DebrisSizeRemoteSelectContainer from '../Debris/Size/DebrisSizeRemoteSelectContainer';
import DebrisThicknessRemoteSelectContainer from '../Debris/Thickness/DebrisThicknessRemoteSelectContainer';
import DebrisRugosityRemoteSelectContainer from '../Debris/Rugosity/DebrisRugosityRemoteSelectContainer';
import DebrisCategoryRemoteSelectContainer from '../Debris/Category/DebrisCategoryRemoteSelectContainer';
import TaxaLevelRemoteSelectContainer from '../Ecosystem/Level/TaxaLevelRemoteSelectContainer';
import TaxaSpeciesStatusRemoteSelectContainer from '../Ecosystem/SpeciesStatus/TaxaSpeciesStatusRemoteSelectContainer';
import TaxaPopulationStatusRemoteSelectContainer from '../Ecosystem/PopulationStatus/TaxaPopulationStatusRemoteSelectContainer';
import TaxaMaturityRemoteSelectContainer from '../Ecosystem/Maturity/TaxaMaturityRemoteSelectContainer';
import TaxaViabilityRemoteSelectContainer from '../Ecosystem/Viability/TaxaViabilityRemoteSelectContainer';
import TaxaAbundanceRemoteSelectContainer from '../Ecosystem/Abundance/TaxaAbundanceRemoteSelectContainer';
import TaxaNativeRegionRemoteSelectContainer from '../Ecosystem/NativeRegion/TaxaNativeRegionRemoteSelectContainer';

const { Step } = Steps;

function FormContainer({ activeForm, setFormModal }) {
    const [form] = Form.useForm();
    const [currentStep, setCurrentStep] = useState(2)

    const create = () => {
        form.validateFields().then(values => {
            console.log(values);
            // if (!err) {
            //     createMareDepth(values).then(data => {
            //         handleCancel();
            //     });
            // }
        });
    };

    const handleCancel = () => {
        setFormModal(false);
        form.resetFields();
    };
    const steps = [
        <Row type="flex" gutter={32}>
            <Col xs={24} md={6}>
                <Form.Item label="Date of survey" name="date" rules={[{ required: true }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Date" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Latitude" name="latitude" rules={[{ required: true }]}>
                    <Input placeholder="Latitude" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Longitude" name="longitude" rules={[{ required: true }]}>
                    <Input placeholder="Longitude" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Ongoing Surveys Modality" name="on_going_survey" rules={[{ required: true }]}>
                    <Input placeholder="Ex.: Diving transect (25 m)" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Site name" name="site" rules={[{ required: true }]}>
                    <Input placeholder="Site" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Region/Province" name="region" rules={[{ required: true }]}>
                    <Input placeholder="Region/Province" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                    <CountryRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Large marine ecosystem" name="lme" rules={[{ required: true }]}>
                    <LmeRemoteSelectContainer />
                </Form.Item>
            </Col>
        </Row>,

        <Row type="flex" gutter={32}>
            <Col xs={24} md={12}>
                <Row type="flex" gutter={32}>
                    <Col span={12}>
                        <Form.Item label="Debris Type (If 'Seafloor', specify depth)" name="debris_type" rules={[{ required: true }]}>
                            <DebrisTypeRemoteSelectContainer />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label=" " name="debris_depth" rules={[{ required: false }]}>
                            <Input placeholder='Depth (m)' />
                        </Form.Item>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Habitat of the finding" name="debris_habitat" rules={[{ required: true }]}>
                    <DebrisHabitatRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris material" name="debris_material" rules={[{ required: true }]}>
                    <DebrisMaterialRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris size class" name="debris_size" rules={[{ required: true }]}>
                    <DebrisSizeRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris weight (Kg)" name="debris_weight" rules={[{ required: true }]}>
                    <InputNumber style={{ width: "100%" }} placeholder='Debris weight' />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris thickness" name="debris_thickness" rules={[{ required: true }]}>
                    <DebrisThicknessRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris surface rugosity" name="debris_rugosity" rules={[{ required: true }]}>
                    <DebrisRugosityRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Categories of Litter Items" name="debris_sub_category" rules={[{ required: true }]}>
                    <DebrisCategoryRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris identification marks" name="debris_marks" rules={[{ required: true }]}>
                    <Input placeholder="Debris identification marks" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Probable debris origin" name="debris_origin" rules={[{ required: true }]}>
                    <Input placeholder="Probable debris origin" />
                </Form.Item>
            </Col>
        </Row>,

        <Row type="flex" gutter={32}>
            <Col xs={24} md={12}>
                <Form.Item label="Highest taxonomic level" name="taxa_level" rules={[{ required: true }]}>
                    <TaxaLevelRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Specify it" name="taxa_identification" rules={[{ required: true }]}>
                    <Input placeholder='Identification based on the highest taxonomic level' />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Authority" name="taxa_authority" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Year of first report" name="taxa_year_first_report" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Reference" name="taxa_reference" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Species Status" name="taxa_species_status" rules={[{ required: true }]}>
                    <TaxaSpeciesStatusRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Population Status" name="taxa_population_status" rules={[{ required: true }]}>
                    <TaxaPopulationStatusRemoteSelectContainer />
                </Form.Item>
            </Col>
        </Row>,

        <Row type="flex" gutter={32}>
            <Col xs={24} md={12}>
                <Form.Item label="Species abundance" name="taxa_abundance" rules={[{ required: true }]}>
                    <TaxaAbundanceRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Viability" name="taxa_viability" rules={[{ required: true }]}>
                    <TaxaViabilityRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Maturity stage" name="taxa_maturity" rules={[{ required: true }]}>
                    <TaxaMaturityRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Native region" name="taxa_native_region" rules={[{ required: true }]}>
                    <TaxaNativeRegionRemoteSelectContainer />
                </Form.Item>
            </Col>
        </Row>

    ]

    const previous = () => {
        setCurrentStep(currentStep - 1);
    };

    const next = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <Modal
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
                    <Steps size="small" current={currentStep} onChange={(step) => setCurrentStep(step)}>
                        <Step title="Item detection" />
                        <Step title="Marine Debris characterization" />
                        <Step title="Biological identification" />
                        <Step title="Biological samples information" />
                    </Steps>

                    <Form style={{ margin: "50px auto" }} layout="vertical" hideRequiredMark form={form}>
                        {steps[currentStep]}
                    </Form>
                </>
            }
        </Modal>
    )
}

export default FormContainer