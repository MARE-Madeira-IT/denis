import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaMaturities } from "../../../../../redux/taxaMaturity/actions";
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


function TaxaMaturity({ data, loading, meta, fetchTaxaMaturities }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaMaturities();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaMaturities(pagination.current, filters);
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
        fetchTaxaMaturities: (page, filters) => dispatch(fetchTaxaMaturities(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaMaturity.loading,
        data: state.taxaMaturity.data,
        meta: state.taxaMaturity.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaMaturity);