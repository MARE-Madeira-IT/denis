import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisRugosities, createDebrisRugosity, deleteDebrisRugosity } from "../../../../../redux/debrisRugosity/actions";
import TableContainer from "./TableContainer";
import { useForm } from "antd/es/form/Form";

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
    
`;


function DebrisRugosity({ data, loading, meta, fetchDebrisRugosities, createDebrisRugosity, deleteDebrisRugosity  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisRugosities();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisRugosities(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisRugosities(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisRugosity(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisRugosity}
                    handleSearch={handleSearch}
                    handleCreate={handleCreate}
                    form={form}
                    loading={loading}
                    meta={meta}
                />
            </ContentContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDebrisRugosities: (page, filters) => dispatch(fetchDebrisRugosities(page, filters)),
        createDebrisRugosity: (data) => dispatch(createDebrisRugosity(data)),
        deleteDebrisRugosity: (id) => dispatch(deleteDebrisRugosity(id)),
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