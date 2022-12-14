import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
    fetchDebrisHabitats, createDebrisHabitat, deleteDebrisHabitat
} from "../../../../../redux/debrisHabitat/actions";
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



function DebrisHabitat({ data, loading, meta, fetchDebrisHabitats, createDebrisHabitat, deleteDebrisHabitat }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisHabitats();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisHabitats(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisHabitats(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisHabitat(values);
            form.resetFields();
        })
    }


    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisHabitat}
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
        fetchDebrisHabitats: (page, filters) => dispatch(fetchDebrisHabitats(page, filters)),
        createDebrisHabitat: (data) => dispatch(createDebrisHabitat(data)),
        deleteDebrisHabitat: (id) => dispatch(deleteDebrisHabitat(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisHabitat.loading,
        data: state.debrisHabitat.data,
        meta: state.debrisHabitat.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisHabitat);