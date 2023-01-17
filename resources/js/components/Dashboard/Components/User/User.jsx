import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUsers } from "../../../../redux/user/actions";
import TableContainer from "./TableContainer";
import FormContainer from "./FormContainer";
import PageHeader from "../../Common/PageHeader";
import { Input, Row } from "antd";
import { maxWidthStyle } from "../../dashboardHelper";

const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
    ${maxWidthStyle}
`;

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    
`;



function User({ data, loading, meta, fetchUsers }) {
    const [filters, setFilters] = useState({});
    const [visible, setVisible] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetchUsers(1, filters);
    }, [filters])

    function handlePageChange(pagination) {
        fetchUsers(pagination.current, filters);
    }

    return (
        <Container>
            <PageHeader title="List of Users" subtitle="Below there is a table view of all existing users on the database. You may edit their profile by clicking on the respective row." />
            <ContentContainer>

                <FormContainer visible={visible} setVisible={setVisible} currentUser={currentUser} />
                <Row style={{ marginBottom: "20px" }}>
                    <Input.Search onSearch={(e) => setFilters({ search: e })} size="large" type="search" placeholder="Search for name, email, institution or localization" />
                </Row>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data} loading={loading} meta={meta}
                    setVisible={setVisible} setCurrentUser={setCurrentUser}
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