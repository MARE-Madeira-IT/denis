import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaAbundances } from "../../../../../redux/taxaAbundance/actions";
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


function TaxaAbundance({ data, loading, meta, fetchTaxaAbundances }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaAbundances();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaAbundances(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaAbundances(1, { search: e.target.value });
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
        fetchTaxaAbundances: (page, filters) => dispatch(fetchTaxaAbundances(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaAbundance.loading,
        data: state.taxaAbundance.data,
        meta: state.taxaAbundance.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaAbundance);