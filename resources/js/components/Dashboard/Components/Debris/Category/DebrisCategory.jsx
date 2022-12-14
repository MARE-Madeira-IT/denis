import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisCategories, createDebrisCategory, deleteDebrisCategory } from "../../../../../redux/debrisCategory/actions";
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



function DebrisCategory({ data, loading, meta, fetchDebrisCategories, createDebrisCategory, deleteDebrisCategory }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisCategories();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisCategories(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisCategories(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisCategory(values);
            form.resetFields();
        })
    }


    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisCategory}
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
        fetchDebrisCategories: (page, filters) => dispatch(fetchDebrisCategories(page, filters)),
        createDebrisCategory: (data) => dispatch(createDebrisCategory(data)),
        deleteDebrisCategory: (id) => dispatch(deleteDebrisCategory(id)),
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