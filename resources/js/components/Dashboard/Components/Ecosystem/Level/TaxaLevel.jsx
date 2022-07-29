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
    box-sizing: border-box;
    font-family: 'Lato';
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