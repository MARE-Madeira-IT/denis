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
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 50px;
    box-sizing: border-box;
`;

const Table = styled.div`
    width: 100%;
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
                <Table>
                    <h2>Species status</h2>
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