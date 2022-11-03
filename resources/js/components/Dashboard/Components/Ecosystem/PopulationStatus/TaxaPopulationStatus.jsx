import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaPopulationStatuses } from "../../../../../redux/taxaPopulationStatus/actions";
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

function TaxaPopulationStatus({ data, loading, meta, fetchTaxaPopulationStatuses }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaPopulationStatuses();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaPopulationStatuses(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaPopulationStatuses(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleSearch={handleSearch}
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
        fetchTaxaPopulationStatuses: (page, filters) => dispatch(fetchTaxaPopulationStatuses(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaPopulationStatus.loading,
        data: state.taxaPopulationStatus.data,
        meta: state.taxaPopulationStatus.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaPopulationStatus);