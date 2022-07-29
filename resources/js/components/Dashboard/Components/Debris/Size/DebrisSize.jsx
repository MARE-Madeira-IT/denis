import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisSizes } from "../../../../../redux/debrisSize/actions";
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

function DebrisSize({ data, loading, meta, fetchDebrisSizes }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisSizes();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisSizes(pagination.current, filters);
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
        fetchDebrisSizes: (page, filters) => dispatch(fetchDebrisSizes(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisSize.loading,
        data: state.debrisSize.data,
        meta: state.debrisSize.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisSize);