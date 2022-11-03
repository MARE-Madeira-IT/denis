import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisHabitats } from "../../../../../redux/debrisHabitat/actions";
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



function DebrisHabitat({ data, loading, meta, fetchDebrisHabitats }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisHabitats();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisHabitats(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisHabitats(1, { search: e.target.value });
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
        fetchDebrisHabitats: (page, filters) => dispatch(fetchDebrisHabitats(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisHabitat.loading,
        data: state.debrisHabitat.data,
        meta: state.debrisHabitat.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisHabitat);