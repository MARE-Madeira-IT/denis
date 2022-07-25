import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisHabitats } from "../../../../../redux/debrisHabitat/actions";
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


function DebrisHabitat({ data, loading, meta, fetchDebrisHabitats }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisHabitats();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisHabitats(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Habitats</h2>
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
        fetchDebrisHabitats: (page, filters) => dispatch(fetchDebrisHabitats(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisHabitat.loading,
        data: state.debrisHabitat.data,
        meta: state.debrisHabitat.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisHabitat);