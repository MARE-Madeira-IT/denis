import { Col, Form, Input, InputNumber, Row, Upload } from 'antd'
import React, { useState } from 'react'
import DebrisCategoryRemoteCascadeContainer from '../../Debris/Category/DebrisCategoryRemoteCascadeContainer'
import DebrisHabitatRemoteSelectContainer from '../../Debris/Habitat/DebrisHabitatRemoteSelectContainer'
import DebrisRugosityRemoteSelectContainer from '../../Debris/Rugosity/DebrisRugosityRemoteSelectContainer'
import DebrisSizeRemoteSelectContainer from '../../Debris/Size/DebrisSizeRemoteSelectContainer'
import DebrisThicknessRemoteSelectContainer from '../../Debris/Thickness/DebrisThicknessRemoteSelectContainer'
import DebrisTypeRemoteSelectContainer from '../../Debris/Type/DebrisTypeRemoteSelectContainer'
import CustomTooltip from './CustomTooltip'

const requiredRule = [{ required: true }];

function DebrisCharacterization() {
    const [requiredDepth, setRequiredDepth] = useState(false)




    function handleTypeChange(e) {
        setRequiredDepth(e == 2)
    }

    return (
        <Row type="flex" align='bottom' gutter={32}>
            <Col xs={24} md={12}>
                <Row align='bottom' type="flex" gutter={32}>
                    <Col span={12}>
                        <Form.Item label={(
                            <>
                                <span>Debris Type*</span>
                                <CustomTooltip text="Location in which the debris was found" />

                            </>)} name="debris_type" rules={requiredRule}>
                            <DebrisTypeRemoteSelectContainer onChange={handleTypeChange} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="If 'Seafloor', specify depth (m)"
                            name="debris_depth"
                            rules={[{ required: requiredDepth, message: "'depth' is required for seafloor reports" }]}
                        >
                            <InputNumber style={{ width: "100%" }} placeholder='Depth (m)' />
                        </Form.Item>
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Habitat of the finding*" name="debris_habitat" rules={requiredRule}>
                    <DebrisHabitatRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label={(
                    <>
                        <span>Debris size class*</span>
                        <CustomTooltip text="Categories of items size ranges" />

                    </>)} name="debris_size" rules={requiredRule}>
                    <DebrisSizeRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris weight (Kg)" name="debris_weight">
                    <InputNumber style={{ width: "100%" }} placeholder='Debris weight' />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label={(
                    <>
                        <span>Stiffness</span>
                        <CustomTooltip text="Flexibility of the material found" />

                    </>)} name="debris_thickness">
                    <DebrisThicknessRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label={(
                    <>
                        <span>Surface rugosity</span>
                        <CustomTooltip text="Description on the surface of the debris" />

                    </>)} name="debris_rugosity">
                    <DebrisRugosityRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Categories of Litter Items*" name="debris_sub_category" rules={requiredRule}>
                    <DebrisCategoryRemoteCascadeContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris identification marks" name="debris_marks">
                    <Input placeholder="Debris identification marks" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Probable debris origin" name="debris_origin">
                    <Input placeholder="Probable debris origin" />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default DebrisCharacterization