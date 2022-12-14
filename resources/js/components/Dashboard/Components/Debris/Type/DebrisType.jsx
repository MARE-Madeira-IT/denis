import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisTypes, createDebrisType, deleteDebrisType } from "../../../../../redux/debrisType/actions";
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

function DebrisType({ data, loading, meta, fetchDebrisTypes, createDebrisType, deleteDebrisType }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisTypes();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisTypes(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisTypes(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisType(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisType}
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
        fetchDebrisTypes: (page, filters) => dispatch(fetchDebrisTypes(page, filters)),
        createDebrisType: (data) => dispatch(createDebrisType(data)),
        deleteDebrisType: (id) => dispatch(deleteDebrisType(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisType.loading,
        data: state.debrisType.data,
        meta: state.debrisType.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisType);