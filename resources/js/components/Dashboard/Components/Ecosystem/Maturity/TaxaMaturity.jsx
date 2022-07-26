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
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 50px;
    box-sizing: border-box;
`;

const Table = styled.div`
    width: 100%;
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
                <Table>
                    <h2>Maturity classes</h2>
                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                    />
                </Table>
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