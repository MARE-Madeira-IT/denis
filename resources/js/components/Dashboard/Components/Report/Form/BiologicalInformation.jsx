import React from 'react'
import styled from "styled-components";
import { Form, Row, Col, Input, Divider } from 'antd'
import TaxaLevelRemoteSelectContainer from '../../Ecosystem/Level/TaxaLevelRemoteSelectContainer';
import TaxaSpeciesStatusRemoteSelectContainer from '../../Ecosystem/SpeciesStatus/TaxaSpeciesStatusRemoteSelectContainer';
import TaxaPopulationStatusRemoteSelectContainer from '../../Ecosystem/PopulationStatus/TaxaPopulationStatusRemoteSelectContainer';
import TaxaAbundanceRemoteSelectContainer from '../../Ecosystem/Abundance/TaxaAbundanceRemoteSelectContainer';
import TaxaViabilityRemoteSelectContainer from '../../Ecosystem/Viability/TaxaViabilityRemoteSelectContainer';
import TaxaMaturityRemoteSelectContainer from '../../Ecosystem/Maturity/TaxaMaturityRemoteSelectContainer';
import TaxaNativeRegionRemoteSelectContainer from '../../Ecosystem/NativeRegion/TaxaNativeRegionRemoteSelectContainer';

const requiredRule = { required: true };

const Delete = styled.img`
    cursor: pointer;
    width: 20px;
    transition: all .3s ease;

    &:hover {
        filter: brightness(.2);
    }
`;

const Subtitle = styled.h2`
    flex: 1;
`;



function BiologicalInformation({ last, handleDelete }) {
    return (
        <>
            <Row type="flex" style={{ marginBottom: "20px" }}>
                <Subtitle>Biological identification & samples information</Subtitle>
                {last && <Delete onClick={handleDelete} src="/icons/delete.svg" alt="delete" />}

            </Row>

            <Row type="flex" gutter={32}>
                <Col xs={24} md={8}>
                    <Form.Item label="Highest taxonomic level*" name='level' rules={[{ ...requiredRule, message: "'taxonomic level' is required" }]}>
                        <TaxaLevelRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Specify it*" name='identification' rules={[{ ...requiredRule, message: "'identification' is required" }]}>
                        <Input placeholder='Identification based on the highest taxonomic level' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Authority*" name="authority" rules={[{ ...requiredRule, message: "'authority' is required" }]}>
                        <Input placeholder="Authority" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Year of first report" name="year_first_report" rules={[{ required: false }]}>
                        <Input placeholder="Year of first report" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Reference" name="reference" rules={[{ required: false }]}>
                        <Input placeholder="Reference" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Species Status*" name="species_status" rules={[{ ...requiredRule, message: "'species status' is required" }]}>
                        <TaxaSpeciesStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Population Status*" name="population_status" rules={[{ ...requiredRule, message: "'population status' is required" }]}>
                        <TaxaPopulationStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Species abundance*" name="abundance" rules={[{ ...requiredRule, message: "'abundance' is required" }]}>
                        <TaxaAbundanceRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Viability*" name="viability" rules={[{ ...requiredRule, message: "'viability' is required" }]}>
                        <TaxaViabilityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Maturity stage*" name="maturity" rules={[{ ...requiredRule, message: "'maturity stages' are required" }]}>
                        <TaxaMaturityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Native region*" name="native_region" rules={[{ ...requiredRule, message: "'native region' is required" }]}>
                        <TaxaNativeRegionRemoteSelectContainer />
                    </Form.Item>
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export default BiologicalInformation