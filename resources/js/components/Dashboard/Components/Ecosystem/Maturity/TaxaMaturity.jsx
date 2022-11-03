import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaMaturities, createTaxaMaturity, deleteTaxaMaturity } from "../../../../../redux/taxaMaturity/actions";
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


function TaxaMaturity({ data, loading, meta, fetchTaxaMaturities, createTaxaMaturity, deleteTaxaMaturity }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaMaturities();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaMaturities(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaMaturities(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaMaturity(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteTaxaMaturity}
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
        fetchTaxaMaturities: (page, filters) => dispatch(fetchTaxaMaturities(page, filters)),
        createTaxaMaturity: (data) => dispatch(createTaxaMaturity(data)),
        deleteTaxaMaturity: (id) => dispatch(deleteTaxaMaturity(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaMaturity.loading,
        data: state.taxaMaturity.data,
        meta: state.taxaMaturity.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaMaturity);