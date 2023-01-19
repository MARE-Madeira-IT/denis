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



function BiologicalInformation({ name, handleDelete, length }) {
    return (
        <>
            <Row type="flex" style={{ marginBottom: "20px" }}>
                <Subtitle>Biological identification & samples information</Subtitle>
                {length > 1 && <Delete onClick={handleDelete} src="/images/icons/delete.svg" alt="delete" />}


            </Row>

            <Row type="flex" align='bottom' gutter={32}>
                <Col xs={24} md={8}>
                    <Form.Item label="Highest taxonomic level*" name={[name, 'level']} rules={[{ ...requiredRule, message: "'taxonomic level' is required" }]}>
                        <TaxaLevelRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Specify it*" name={[name, 'identification']} rules={[{ ...requiredRule, message: "'identification' is required" }]}>
                        <Input placeholder='Identification based on the highest taxonomic level' />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Authority" name={[name, 'authority']} rules={[{ required: false }]}>
                        <Input placeholder="Authority" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Species Status*" name={[name, 'species_status']} rules={[{ ...requiredRule, message: "'species status' is required" }]}>
                        <TaxaSpeciesStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Year of the first record (if NIS or cryptogenic)" name={[name, 'year_first_report']} rules={[{ required: false }]}>
                        <Input placeholder="Year of the first record (if NIS or cryptogenic)" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Reference" name={[name, 'reference']} rules={[{ required: false }]}>
                        <Input placeholder="Reference" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Population Status*" name={[name, 'population_status']} rules={[{ ...requiredRule, message: "'population status' is required" }]}>
                        <TaxaPopulationStatusRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Species abundance*" name={[name, 'abundance']} rules={[{ ...requiredRule, message: "'abundance' is required" }]}>
                        <TaxaAbundanceRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Viability*" name={[name, 'viability']} rules={[{ ...requiredRule, message: "'viability' is required" }]}>
                        <TaxaViabilityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Maturity stage*" name={[name, 'maturity']} rules={[{ ...requiredRule, message: "'maturity stages' are required" }]}>
                        <TaxaMaturityRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Native region*" name={[name, 'native_region']} rules={[{ ...requiredRule, message: "'native region' is required" }]}>
                        <TaxaNativeRegionRemoteSelectContainer />
                    </Form.Item>
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export default BiologicalInformation