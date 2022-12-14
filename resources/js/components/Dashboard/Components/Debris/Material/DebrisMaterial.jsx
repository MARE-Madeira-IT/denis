import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisMaterials, deleteDebrisMaterial, createDebrisMaterial } from "../../../../../redux/debrisMaterial/actions";
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


function DebrisMaterial({ data, loading, meta, fetchDebrisMaterials, createDebrisMaterial, deleteDebrisMaterial  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisMaterials();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisMaterials(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisMaterials(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisMaterial(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteDebrisMaterial}
                    handleSearch={handleSearch}
                    handleCreate={handleCreate}
                    form={form}
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
        fetchDebrisMaterials: (page, filters) => dispatch(fetchDebrisMaterials(page, filters)),
        createDebrisMaterial: (data) => dispatch(createDebrisMaterial(data)),
        deleteDebrisMaterial: (id) => dispatch(deleteDebrisMaterial(id)),
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