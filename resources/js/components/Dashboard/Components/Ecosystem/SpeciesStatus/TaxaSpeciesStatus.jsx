import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaSpeciesStatuses, createTaxaSpeciesStatus, deleteTaxaSpeciesStatus } from "../../../../../redux/taxaSpeciesStatus/actions";
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


function TaxaSpeciesStatus({ data, loading, meta, fetchTaxaSpeciesStatuses, createTaxaSpeciesStatus, deleteTaxaSpeciesStatus }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaSpeciesStatuses();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaSpeciesStatuses(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaSpeciesStatuses(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaSpeciesStatus(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteTaxaSpeciesStatus}
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
        fetchTaxaSpeciesStatuses: (page, filters) => dispatch(fetchTaxaSpeciesStatuses(page, filters)),
        createTaxaSpeciesStatus: (data) => dispatch(createTaxaSpeciesStatus(data)),
        deleteTaxaSpeciesStatus: (id) => dispatch(deleteTaxaSpeciesStatus(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaSpeciesStatus.loading,
        data: state.taxaSpeciesStatus.data,
        meta: state.taxaSpeciesStatus.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaSpeciesStatus);