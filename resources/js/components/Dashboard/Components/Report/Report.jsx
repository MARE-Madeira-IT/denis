import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, fetchReport, updateState } from "../../../../redux/report/actions";
import { setDrawerState } from "../../../../redux/drawer/actions";
import TableContainer from "./TableContainer";
import Drawer from "./Drawer";
import FormContainer from "./FormContainer";
import { Row } from "antd";
import MapView from "../../../MapView";
import { Link } from "react-router-dom";
import PageHeader from "../../Common/PageHeader";
import { maxWidthStyle } from "../../dashboardHelper";

const Content = styled.div`
    width: 100%;
    margin: auto;
`;

const ContentContainer = styled.div`
    background-color: white;
    ${maxWidthStyle}
`;

const MapContainer = styled.div`
    position: relative;

    .background {
        position: absolute;
        height: 50%;
        width: 100vw;
        z-index: -1;
        background-color: white;
        left: 0;
        bottom: 0;
    }
    .map-container {
        ${maxWidthStyle}
        border-radius: 12px;
    }
    
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
`;


const Create = styled.button`
    padding: 12px 15px;
    background-color: #0C4C88;
    border: 0px;
    box-shadow: none;
    color: white;
    margin-left: auto;
    cursor: pointer;
`;


function Report({ data, loading, meta, current, fetchReports, fetchReport, setDrawerState, updateState }) {
    const [filters, setFilters] = useState({});
    const [activeForm, setFormModal] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        fetchReports();
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
    }

    function handleUpdateClick() {

        setUpdateMode(true);
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
            <Content>
                <PageHeader title="Reports overview" />

                <FormContainer setUpdateMode={setUpdateMode} updateMode={updateMode} activeForm={activeForm} setFormModal={setFormModal} />
                <Drawer handleUpdateClick={handleUpdateClick} data={current} setUpdateMode={setUpdateMode} />
                <MapContainer>
                    <div className="background"></div>
                    <MapView customData={data} />
                </MapContainer>
                <ContentContainer>
                    <Row style={{ paddingTop: "50px" }} type="flex" justify="end">
                        <Create onClick={handleCreateClick}>Create</Create>
                    </Row>
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