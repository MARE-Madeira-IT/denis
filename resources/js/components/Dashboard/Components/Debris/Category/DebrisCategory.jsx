import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisCategories } from "../../../../../redux/debrisCategory/actions";
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


function DebrisCategory({ data, loading, meta, fetchDebrisCategories }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisCategories();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisCategories(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <h2>Categories</h2>
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
        fetchDebrisCategories: (page, filters) => dispatch(fetchDebrisCategories(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisCategory.loading,
        data: state.debrisCategory.data,
        meta: state.debrisCategory.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisCategory);