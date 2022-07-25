import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisRugosities } from "../../../../../redux/debrisRugosity/actions";
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


function DebrisRugosity({ data, loading, meta, fetchDebrisRugosities }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisRugosities();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisRugosities(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Rugosity classes</h2>
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
        fetchDebrisRugosities: (page, filters) => dispatch(fetchDebrisRugosities(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisRugosity.loading,
        data: state.debrisRugosity.data,
        meta: state.debrisRugosity.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisRugosity);