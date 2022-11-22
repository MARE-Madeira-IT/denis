import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, fetchReport, updateState } from "../../../../redux/report/actions";
import { setDrawerState } from "../../../../redux/drawer/actions";
import TableContainer from "./TableContainer";
import Drawer from "./Drawer";
import FormContainer from "./FormContainer";
import { Row } from "antd";

const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;width: 100%;
    margin: auto;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Lato';
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
            <ContentContainer>
                <FormContainer setUpdateMode={setUpdateMode} updateMode={updateMode} activeForm={activeForm} setFormModal={setFormModal} />
                <Drawer handleUpdateClick={handleUpdateClick} data={current} setUpdateMode={setUpdateMode} />
                <Row type="flex" justify="end">
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