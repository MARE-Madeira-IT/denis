import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaViabilities, createTaxaViability, deleteTaxaViability  } from "../../../../../redux/taxaViability/actions";
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


function TaxaViability({ data, loading, meta, fetchTaxaViabilities, createTaxaViability, deleteTaxaViability  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaViabilities();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaViabilities(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaViabilities(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaViability(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteTaxaViability}
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
        fetchTaxaViabilities: (page, filters) => dispatch(fetchTaxaViabilities(page, filters)),
        createTaxaViability: (data) => dispatch(createTaxaViability(data)),
        deleteTaxaViability: (id) => dispatch(deleteTaxaViability(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaViability.loading,
        data: state.taxaViability.data,
        meta: state.taxaViability.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaViability);