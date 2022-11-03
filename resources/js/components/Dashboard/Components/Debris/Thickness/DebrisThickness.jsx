import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisThicknesses, createDebrisThickness, deleteDebrisThickness } from "../../../../../redux/debrisThickness/actions";
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
    font-family: 'Lato';
`;

function DebrisThickness({ data, loading, meta, fetchDebrisThicknesses, createDebrisThickness, deleteDebrisThickness }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisThicknesses();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisThicknesses(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisThicknesses(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisThickness(values);
            form.resetFields();
        })
    }


    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisThickness}
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
        fetchDebrisThicknesses: (page, filters) => dispatch(fetchDebrisThicknesses(page, filters)),
        createDebrisThickness: (data) => dispatch(createDebrisThickness(data)),
        deleteDebrisThickness: (id) => dispatch(deleteDebrisThickness(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisThickness.loading,
        data: state.debrisThickness.data,
        meta: state.debrisThickness.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisThickness);