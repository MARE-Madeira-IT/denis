import { Col, Row } from 'antd'
import React from 'react'
import styled from "styled-components";
import TaxaAbundance from './Abundance/TaxaAbundance';
import TaxaLevel from './Level/TaxaLevel';
import TaxaMaturity from './Maturity/TaxaMaturity';
import TaxaNativeRegion from './NativeRegion/TaxaNativeRegion';
import TaxaPopulationStatus from './PopulationStatus/TaxaPopulationStatus';
import TaxaSpeciesStatus from './SpeciesStatus/TaxaSpeciesStatus';
import TaxaViability from './Viability/TaxaViability';

const SectionContainer = styled.div`
    padding: 16px 0px;
    box-sizing: border-box;
`;

function EcosystemMain() {
    return (
        <Row type="flex" justify='space-around' gutter={32}>
            <Col span={8}>
                <SectionContainer><TaxaLevel /></SectionContainer>
                <SectionContainer><TaxaAbundance /></SectionContainer>
            </Col>
            <Col span={8}>
                <SectionContainer><TaxaMaturity /></SectionContainer>
                <SectionContainer><TaxaNativeRegion /></SectionContainer>
            </Col>
            <Col span={8}>
                <SectionContainer><TaxaSpeciesStatus /></SectionContainer>
                <SectionContainer><TaxaViability /></SectionContainer>
                <SectionContainer><TaxaPopulationStatus /></SectionContainer>
            </Col>
        </Row>
    )
}

export default EcosystemMain