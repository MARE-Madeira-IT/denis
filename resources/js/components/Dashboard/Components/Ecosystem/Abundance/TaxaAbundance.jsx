import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaAbundances, createTaxaAbundance, deleteTaxaAbundance } from "../../../../../redux/taxaAbundance/actions";
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


function TaxaAbundance({ data, loading, meta, fetchTaxaAbundances, createTaxaAbundance, deleteTaxaAbundance }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaAbundances();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaAbundances(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaAbundances(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaAbundance(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteTaxaAbundance}
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
        fetchTaxaAbundances: (page, filters) => dispatch(fetchTaxaAbundances(page, filters)),
        createTaxaAbundance: (data) => dispatch(createTaxaAbundance(data)),
        deleteTaxaAbundance: (id) => dispatch(deleteTaxaAbundance(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaAbundance.loading,
        data: state.taxaAbundance.data,
        meta: state.taxaAbundance.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaAbundance);