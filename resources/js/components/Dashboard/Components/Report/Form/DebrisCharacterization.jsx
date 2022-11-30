import { Col, Form, Input, InputNumber, Row } from 'antd'
import React, { useState } from 'react'
import DebrisCategoryRemoteCascadeContainer from '../../Debris/Category/DebrisCategoryRemoteCascadeContainer'
import DebrisHabitatRemoteSelectContainer from '../../Debris/Habitat/DebrisHabitatRemoteSelectContainer'
import DebrisMaterialRemoteSelectContainer from '../../Debris/Material/DebrisMaterialRemoteSelectContainer'
import DebrisRugosityRemoteSelectContainer from '../../Debris/Rugosity/DebrisRugosityRemoteSelectContainer'
import DebrisSizeRemoteSelectContainer from '../../Debris/Size/DebrisSizeRemoteSelectContainer'
import DebrisThicknessRemoteSelectContainer from '../../Debris/Thickness/DebrisThicknessRemoteSelectContainer'
import DebrisTypeRemoteSelectContainer from '../../Debris/Type/DebrisTypeRemoteSelectContainer'

const requiredRule = [{ required: true }];

function DebrisCharacterization() {
    const [requiredDepth, setRequiredDepth] = useState(false)

    function handleTypeChange(e) {
        setRequiredDepth(e == 2)
    }

    return (
        <Row type="flex" gutter={32}>
            <Col xs={24} md={12}>
                <Row type="flex" gutter={32}>
                    <Col span={12}>
                        <Form.Item label="Debris Type*" name="debris_type" rules={requiredRule}>
                            <DebrisTypeRemoteSelectContainer onChange={handleTypeChange} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="If 'Seafloor' debris type, specify depth"
                            name="debris_depth"
                            rules={[{ required: requiredDepth, message: "'depth' is required for seafloor reports" }]}
                        >
                            <Input placeholder='Depth (m)' />
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
                <Form.Item label="Debris material*" name="debris_material" rules={requiredRule}>
                    <DebrisMaterialRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris size class*" name="debris_size" rules={requiredRule}>
                    <DebrisSizeRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris weight (Kg)*" name="debris_weight" rules={requiredRule}>
                    <InputNumber style={{ width: "100%" }} placeholder='Debris weight' />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris thickness*" name="debris_thickness" rules={requiredRule}>
                    <DebrisThicknessRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris surface rugosity*" name="debris_rugosity" rules={requiredRule}>
                    <DebrisRugosityRemoteSelectContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Categories of Litter Items*" name="debris_sub_category" rules={requiredRule}>
                    <DebrisCategoryRemoteCascadeContainer />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Debris identification marks*" name="debris_marks" rules={requiredRule}>
                    <Input placeholder="Debris identification marks" />
                </Form.Item>
            </Col>
            <Col xs={24} md={6}>
                <Form.Item label="Probable debris origin*" name="debris_origin" rules={requiredRule}>
                    <Input placeholder="Probable debris origin" />
                </Form.Item>
            </Col>
        </Row>
    )
}

export default DebrisCharacterization