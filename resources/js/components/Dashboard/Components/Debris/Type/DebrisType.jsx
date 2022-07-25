import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisTypes } from "../../../../../redux/debrisType/actions";
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


function DebrisType({ data, loading, meta, fetchDebrisTypes }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisTypes();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisTypes(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Type</h2>
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
        fetchDebrisTypes: (page, filters) => dispatch(fetchDebrisTypes(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisType.loading,
        data: state.debrisType.data,
        meta: state.debrisType.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisType);