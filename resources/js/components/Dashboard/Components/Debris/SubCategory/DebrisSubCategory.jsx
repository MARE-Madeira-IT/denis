import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisSubCategories } from "../../../../../redux/debrisSubCategory/actions";
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


function DebrisSubCategory({ data, loading, meta, fetchDebrisSubCategories }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisSubCategories();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisSubCategories(pagination.current, filters);
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
        fetchDebrisSubCategories: (page, filters) => dispatch(fetchDebrisSubCategories(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisSubCategory.loading,
        data: state.debrisSubCategory.data,
        meta: state.debrisSubCategory.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisSubCategory);