import { Col, Row } from 'antd'
import React from 'react'
import styled from "styled-components";
import DebrisCategory from './Category/DebrisCategory';
import DebrisHabitat from './Habitat/DebrisHabitat'
import DebrisMaterial from './Material/DebrisMaterial'
import DebrisRugosity from './Rugosity/DebrisRugosity'
import DebrisSize from './Size/DebrisSize'
import DebrisSubCategory from './SubCategory/DebrisSubCategory';
import DebrisThickness from './Thickness/DebrisThickness'
import DebrisType from './Type/DebrisType'

const SectionContainer = styled.div`
    padding: 16px 0px;
    box-sizing: border-box;
`;

function Main() {
    return (
        <Row type="flex" justify='space-around' gutter={32}>
            <Col span={8}>
                <SectionContainer><DebrisCategory /></SectionContainer>
            </Col>
            <Col span={16}>
                <SectionContainer><DebrisSubCategory /></SectionContainer>
            </Col>
            <Col span={8}>
                <SectionContainer><DebrisMaterial /></SectionContainer>
                <SectionContainer><DebrisThickness /></SectionContainer>
            </Col>
            <Col span={8}>
                <SectionContainer><DebrisSize /></SectionContainer>
                <SectionContainer><DebrisRugosity /></SectionContainer>
            </Col>
            <Col span={8}>
                <SectionContainer><DebrisHabitat /></SectionContainer>
                <SectionContainer><DebrisType /></SectionContainer>
            </Col>
        </Row>
    )
}

export default Main