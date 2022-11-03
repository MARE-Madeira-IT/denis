import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisRugosities } from "../../../../../redux/debrisRugosity/actions";
import TableContainer from "./TableContainer";

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


function DebrisRugosity({ data, loading, meta, fetchDebrisRugosities }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisRugosities();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisRugosities(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisRugosities(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleSearch={handleSearch}
                    loading={loading}
                    meta={meta}
                />
            </ContentContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDebrisRugosities: (page, filters) => dispatch(fetchDebrisRugosities(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisRugosity.loading,
        data: state.debrisRugosity.data,
        meta: state.debrisRugosity.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisRugosity);