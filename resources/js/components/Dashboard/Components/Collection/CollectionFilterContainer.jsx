import { Col, Input, Row, Spin } from 'antd';
import React, { useState } from 'react'
import { Create, CreateSecundary } from '../../dashboardHelper';
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCollections } from "../../../../redux/collection/actions";

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;


        .ant-spin-dot-item {
            background-color: #fff;
        }
    
`;


function CollectionFilterContainer(props) {
    const [filters, setFilters] = useState({ title: undefined, doi: undefined });

    function handleSearchClick() {
        props.fetchCollections(1, filters);
    }

    return (
        <Row type="flex" justify='space-between'>
            <Col xs={24} md={16}>
                <Row type="flex" gutter={16} justify='space-between'>
                    <Col span={12}>
                        <Input value={filters.title} onChange={(e) => setFilters({ ...filters, title: e.target.value })} size="large" placeholder='Title' />
                    </Col>
                    <Col span={12}>
                        <Input value={filters.doi} onChange={(e) => setFilters({ ...filters, doi: e.target.value })} size="large" placeholder='Digital object identifier' />
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={8}>
                <ButtonContainer>
                    <CreateSecundary onClick={handleSearchClick}>Search</CreateSecundary>

                    <Create disabled={props.loading} onClick={() => props.setActiveForm(true)}>
                        {props.loading ? <Spin /> : "Add collection"}
                    </Create>
                </ButtonContainer>
            </Col>
        </Row>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollections: (page, filters) => dispatch(fetchCollections(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.collection.loadingExport,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionFilterContainer);