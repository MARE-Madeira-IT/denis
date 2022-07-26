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
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 50px;
    box-sizing: border-box;
`;

const Table = styled.div`
    width: 100%;
`;


function TaxaViability({ data, loading, meta, fetchTaxaViabilities }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaViabilities();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaViabilities(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Viability classes</h2>
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