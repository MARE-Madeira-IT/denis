import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaNativeRegions } from "../../../../../redux/taxaNativeRegion/actions";
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


function TaxaNativeRegion({ data, loading, meta, fetchTaxaNativeRegions }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchTaxaNativeRegions();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaNativeRegions(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Native regions</h2>
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
        fetchTaxaNativeRegions: (page, filters) => dispatch(fetchTaxaNativeRegions(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaNativeRegion.loading,
        data: state.taxaNativeRegion.data,
        meta: state.taxaNativeRegion.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaNativeRegion);