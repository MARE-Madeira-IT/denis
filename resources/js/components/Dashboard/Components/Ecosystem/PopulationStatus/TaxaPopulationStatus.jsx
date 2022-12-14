import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaPopulationStatuses, createTaxaPopulationStatus, deleteTaxaPopulationStatus  } from "../../../../../redux/taxaPopulationStatus/actions";
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

function TaxaPopulationStatus({ data, loading, meta, fetchTaxaPopulationStatuses, createTaxaPopulationStatus, deleteTaxaPopulationStatus  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaPopulationStatuses();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaPopulationStatuses(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaPopulationStatuses(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaPopulationStatus(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteTaxaPopulationStatus}
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
        fetchTaxaPopulationStatuses: (page, filters) => dispatch(fetchTaxaPopulationStatuses(page, filters)),
        createTaxaPopulationStatus: (data) => dispatch(createTaxaPopulationStatus(data)),
        deleteTaxaPopulationStatus: (id) => dispatch(deleteTaxaPopulationStatus(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaPopulationStatus.loading,
        data: state.taxaPopulationStatus.data,
        meta: state.taxaPopulationStatus.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaPopulationStatus);