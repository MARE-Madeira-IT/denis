import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTaxaNativeRegions, createTaxaNativeRegion, deleteTaxaNativeRegion  } from "../../../../../redux/taxaNativeRegion/actions";
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



function TaxaNativeRegion({ data, loading, meta, fetchTaxaNativeRegions, createTaxaNativeRegion, deleteTaxaNativeRegion  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchTaxaNativeRegions();
    }, [])

    function handlePageChange(pagination) {
        fetchTaxaNativeRegions(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchTaxaNativeRegions(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createTaxaNativeRegion(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
                <TableContainer
                    handlePageChange={handlePageChange}
                    handleDelete={deleteTaxaNativeRegion}
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
        fetchTaxaNativeRegions: (page, filters) => dispatch(fetchTaxaNativeRegions(page, filters)),
        createTaxaNativeRegion: (data) => dispatch(createTaxaNativeRegion(data)),
        deleteTaxaNativeRegion: (id) => dispatch(deleteTaxaNativeRegion(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.taxaNativeRegion.loading,
        data: state.taxaNativeRegion.data,
        meta: state.taxaNativeRegion.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaxaNativeRegion);