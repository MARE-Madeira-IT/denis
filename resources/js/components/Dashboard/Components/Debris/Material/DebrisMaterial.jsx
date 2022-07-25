import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisMaterials } from "../../../../../redux/debrisMaterial/actions";
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
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    padding: 50px;
    box-sizing: border-box;
`;

const Table = styled.div`
    width: 100%;
`;


function DebrisMaterial({ data, loading, meta, fetchDebrisMaterials }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisMaterials();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisMaterials(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Materials</h2>
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
        fetchDebrisMaterials: (page, filters) => dispatch(fetchDebrisMaterials(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisMaterial.loading,
        data: state.debrisMaterial.data,
        meta: state.debrisMaterial.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisMaterial);