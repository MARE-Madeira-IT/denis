import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, fetchReport, updateState, fetchReportGraph } from "../../../../redux/report/actions";
import { setDrawerState } from "../../../../redux/drawer/actions";
import TableContainer from "./TableContainer";
import Drawer from "./Drawer";
import FormContainer from "./FormContainer";
import { Row } from "antd";
import MapView from "../../../MapView";
import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import { Create, maxWidthStyle } from "../../dashboardHelper";
import GraphContainer from "./GraphContainer";

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
`;

const MapContainer = styled.div`
    position: relative;
    width: 50%;

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


function Report({ data, loading, meta, fetchReportGraph, fetchReports, fetchReport, setDrawerState, updateState }) {
    const [filters, setFilters] = useState({});
    const [activeForm, setFormModal] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [hasInitialData, setHasInitialData] = useState(false);
    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetchReports();
        fetchReportGraph();
        console.log(searchParams.get("create"));
        if (searchParams.get("create")) {
            handleCreateClick();
        }
    }, [])

    function handlePageChange(pagination) {
        fetchReports(pagination.current, filters);
    }

    function handleRowClick(row) {
        fetchReport(row.id).then((response) => {
            setDrawerState(1, response.action.payload.data.data);
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
        setDrawerState(0, {});
    }

    function handleDuplicateClick() {
        setUpdateMode(false);
        setHasInitialData(true);
        setFormModal(true);
        setDrawerState(0, {});
    }

    useEffect(() => {
        if (!loading) {
            fetchReports(1, filters);
        }

    }, [filters])

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
                        <MapView customData={data} />
                    </MapContainer>
                    <MapContainer>
                        <GraphContainer />
                    </MapContainer>
                </FlexContainer>
                <ContentContainer>

                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                        handleRowClick={handleRowClick}
                        setFilters={setFilters}
                        filters={filters}
                        updateState={updateState}
                    />
                </ContentContainer>

            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReports: (page, filters) => dispatch(fetchReports(page, filters)),
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);