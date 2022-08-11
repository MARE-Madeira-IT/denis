import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchReports, fetchReport } from "../../../../redux/report/actions";
import { setDrawerState } from "../../../../redux/drawer/actions";
import TableContainer from "./TableContainer";
import Drawer from "./Drawer";
import FormContainer from "./FormContainer";

const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Lato';
`;



function Report({ data, loading, meta, current, fetchReports, fetchReport, setDrawerState }) {
    const [filters, setFilters] = useState({});
    const [activeForm, setFormModal] = useState(false)

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

    return (
        <Container>
            <ContentContainer>
                <FormContainer activeForm={activeForm} setFormModal={setFormModal} />
                <Drawer data={current} />
                <div onClick={() => setFormModal(true)}>Create</div>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    loading={loading}
                    meta={meta}
                    handleRowClick={handleRowClick}
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