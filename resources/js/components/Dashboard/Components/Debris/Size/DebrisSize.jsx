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
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    padding: 50px;
    box-sizing: border-box;
`;

const Table = styled.div`
    width: 100%;
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
                <Table>
                    <h2>Size classes</h2>
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