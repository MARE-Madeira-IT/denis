import { Col, DatePicker, Input, Row, Spin } from 'antd';
import React, { useState } from 'react'
import { Create, CreateSecundary } from '../../dashboardHelper';
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, exportReports } from "../../../../redux/report/actions";

const { RangePicker } = DatePicker;
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


function ReportFilterContainer(props) {
    const [filters, setFilters] = useState({ debris: undefined, taxas: undefined, date: [undefined, undefined] });

    function handleSearchClick() {
        props.fetchReports(1, filters);
    }

    return (
        <Row type="flex" justify='space-between'>
            <Col xs={24} md={16}>
                <Row type="flex" gutter={16} justify='space-between'>
                    <Col span={8}>
                        <Input value={filters.debris} onChange={(e) => setFilters({ ...filters, debris: e.target.value })} size="large" placeholder='Debris' />
                    </Col>
                    <Col span={8}>
                        <Input value={filters.taxas} onChange={(e) => setFilters({ ...filters, taxas: e.target.value })} size="large" placeholder='Biodiversity' />
                    </Col>
                    <Col span={8}>
                        <RangePicker value={filters.date} size="large" style={{ width: "100%" }} placeholder='Date' />
                    </Col>
                </Row>
            </Col>
            <Col xs={24} md={8}>
                <ButtonContainer>
                    <CreateSecundary onClick={handleSearchClick}>Search</CreateSecundary>

                    <Create disabled={props.loading} onClick={() => props.setActiveForm(true)}>
                        {props.loading ? <Spin /> : "Export"}
                    </Create>
                </ButtonContainer>
            </Col>
        </Row>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchReports: (page, filters) => dispatch(fetchReports(page, filters)),
        exportReports: (filters) => dispatch(exportReports(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loadingExport,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportFilterContainer);