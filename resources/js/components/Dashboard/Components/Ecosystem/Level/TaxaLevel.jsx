import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaLevels } from "../../../../../redux/taxaLevel/actions";
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


function TaxaLevel({ data, loading, meta, fetchTaxaLevels }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaLevels();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaLevels(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Taxonomic levels</h2>
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
        fetchTaxaLevels: (page, filters) => dispatch(fetchTaxaLevels(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaLevel.loading,
        data: state.taxaLevel.data,
        meta: state.taxaLevel.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaLevel);