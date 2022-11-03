import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaViabilities } from "../../../../../redux/taxaViability/actions";
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


function TaxaViability({ data, loading, meta, fetchTaxaViabilities }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaViabilities();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaViabilities(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaViabilities(1, { search: e.target.value });
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
        fetchTaxaViabilities: (page, filters) => dispatch(fetchTaxaViabilities(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaViability.loading,
        data: state.taxaViability.data,
        meta: state.taxaViability.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaViability);