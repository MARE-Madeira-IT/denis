import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaSpeciesStatuses } from "../../../../../redux/taxaSpeciesStatus/actions";
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


function TaxaSpeciesStatus({ data, loading, meta, fetchTaxaSpeciesStatuses }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaSpeciesStatuses();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaSpeciesStatuses(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    loading={loading}
                    meta={meta}
                />
            </ContentContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTaxaSpeciesStatuses: (page, filters) => dispatch(fetchTaxaSpeciesStatuses(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaSpeciesStatus.loading,
        data: state.taxaSpeciesStatus.data,
        meta: state.taxaSpeciesStatus.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaSpeciesStatus);