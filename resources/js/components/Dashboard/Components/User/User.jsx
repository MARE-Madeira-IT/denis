import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUsers } from "../../../../redux/user/actions";
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



function User({ data, loading, meta, fetchUsers }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchUsers(1, filters);
    }, [])

    function handlePageChange(pagination) {
        fetchUsers(pagination.current, filters);
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
        fetchUsers: (page, filters) => dispatch(fetchUsers(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        data: state.user.data,
        meta: state.user.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);