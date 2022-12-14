import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisSubCategories, createDebrisSubCategory, deleteDebrisSubCategory } from "../../../../../redux/debrisSubCategory/actions";
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


function DebrisSubCategory({ data, loading, meta, fetchDebrisSubCategories, deleteDebrisSubCategory }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisSubCategories();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisSubCategories(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisSubCategories(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisSubCategory(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>

                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisSubCategory}
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
        fetchDebrisSubCategories: (page, filters) => dispatch(fetchDebrisSubCategories(page, filters)),
        createDebrisSubCategory: (data) => dispatch(createDebrisSubCategory(data)),
        deleteDebrisSubCategory: (id) => dispatch(deleteDebrisSubCategory(id)),
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