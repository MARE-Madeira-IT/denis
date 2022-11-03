import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaLevels, createTaxaLevel, deleteTaxaLevel } from "../../../../../redux/taxaLevel/actions";
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


function TaxaLevel({ data, loading, meta, fetchTaxaLevels, createTaxaLevel, deleteTaxaLevel }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaLevels();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaLevels(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaLevels(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaLevel(values);
            form.resetFields();
        })
    }


    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteTaxaLevel}
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
        fetchTaxaLevels: (page, filters) => dispatch(fetchTaxaLevels(page, filters)),
        createTaxaLevel: (data) => dispatch(createTaxaLevel(data)),
        deleteTaxaLevel: (id) => dispatch(deleteTaxaLevel(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaLevel.loading,
        data: state.taxaLevel.data,
        meta: state.taxaLevel.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaLevel);