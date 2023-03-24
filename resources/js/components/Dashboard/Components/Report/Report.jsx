import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, fetchReport, updateState, fetchReportGraph, fetchReportsCoordinates } from "../../../../redux/report/actions";
import { setDrawerState } from "../../../../redux/drawer/actions";
import TableContainer from "./TableContainer";
import Drawer from "./Drawer";
import FormContainer from "./FormContainer";
import { Row } from "antd";
import MapView from "../../../MapView";
import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import { Create, dimensions, maxWidthStyle } from "../../dashboardHelper";
import GraphContainer from "./GraphContainer";
import ReportFilterContainer from "./ReportFilterContainer";

const Content = styled.div`
    width: 100%;
    margin: auto;
    ${maxWidthStyle}
`;

const ContentContainer = styled.div`
    background-color: white;
    width: 100%;
    
`;

const FlexContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 50px;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
    }
    
`;

const MapContainer = styled.div`
    position: relative;
    width: 50%;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    .map-container {
        border-radius: 12px;
    }

    #chart-1 {
        height: 100% !important;
    }
    
`;

const Container = styled.div`
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
`;


function Report(props, { data, loading, meta, mapData }) {
    const [filters, setFilters] = useState({});
    const [activeForm, setFormModal] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [hasInitialData, setHasInitialData] = useState(false);
    var { data, loading, meta, mapData } = props;
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        props.fetchReports(1, filters);
    }, [filters])

    useEffect(() => {
        props.fetchReportGraph();
        props.fetchReportsCoordinates();

        if (searchParams.get("create")) {
            handleCreateClick();
        }
    }, [])

    function handlePageChange(pagination) {
        props.fetchReports(pagination.current, filters);
    }

    function handleRowClick(row) {
        props.fetchReport(row.id).then((response) => {
            props.setDrawerState(1, response.action.payload.data.data);
        })
    }

    function handleCreateClick() {
        setFormModal(true);
        setUpdateMode(false);
        setHasInitialData(false);
    }

    function handleUpdateClick() {
        setUpdateMode(true);
        setHasInitialData(true);
        setFormModal(true);
        props.setDrawerState(0, {});
    }

    function handleDuplicateClick() {
        setUpdateMode(false);
        setHasInitialData(true);
        setFormModal(true);
        props.setDrawerState(0, {});
    }



    return (
        <Container>
            <PageHeader title="Reports overview" />
            <Content>
                <FormContainer setHasInitialData={setHasInitialData} hasInitialData={hasInitialData} setUpdateMode={setUpdateMode} updateMode={updateMode} activeForm={activeForm} setFormModal={setFormModal} />
                <Drawer handleUpdateClick={handleUpdateClick} handleDuplicateClick={handleDuplicateClick} />

                <Row style={{ padding: "50px 0px 20px 0px" }} type="flex" justify="end">
                    <Create onClick={handleCreateClick}>Add a report to the database</Create>
                </Row>

                <FlexContainer type="flex">
                    <MapContainer>
                        <div className="background"></div>
                        <MapView customData={mapData} />
                    </MapContainer>
                    <MapContainer>
                        <GraphContainer />
                    </MapContainer>
                </FlexContainer>

                <ContentContainer>
                    <ReportFilterContainer />
                    <br />
                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                        handleRowClick={handleRowClick}
                        setFilters={setFilters}
                        filters={filters}
                        updateState={props.updateState}
                    />
                </ContentContainer>

            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReports: (page, filters) => dispatch(fetchReports(page, filters)),
        fetchReportsCoordinates: () => dispatch(fetchReportsCoordinates()),
        fetchReport: (id) => dispatch(fetchReport(id)),
        setDrawerState: (state, object) => dispatch(setDrawerState(state, object)),
        updateState: (data) => dispatch(updateState(data)),
        fetchReportGraph: (filters) => dispatch(fetchReportGraph(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.data,
        meta: state.report.meta,
        current: state.drawer.current,
        mapData: state.report.mapData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);