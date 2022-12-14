import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisSizes, createDebrisSize, deleteDebrisSize } from "../../../../../redux/debrisSize/actions";
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

function DebrisSize({ data, loading, meta, fetchDebrisSizes, createDebrisSize, deleteDebrisSize  }) {
    const [filters, setFilters] = useState({});
    const [form] = useForm();

    useEffect(() => {
        fetchDebrisSizes();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisSizes(pagination.current, filters);
    }

    function handleSearch(e) {
        fetchDebrisSizes(1, { search: e.target.value });
        setFilters({ search: e.target.value })
    }

    function handleCreate() {
        form.validateFields().then((values) => {
            createDebrisSize(values);
            form.resetFields();
        })
    }

    return (
        <Container>
            <ContentContainer>
            <TableContainer
                    handlePageChange={handlePageChange}
                    data={data}
                    handleDelete={deleteDebrisSize}
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
        fetchDebrisSizes: (page, filters) => dispatch(fetchDebrisSizes(page, filters)),
        createDebrisSize: (data) => dispatch(createDebrisSize(data)),
        deleteDebrisSize: (id) => dispatch(deleteDebrisSize(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisSize.loading,
        data: state.debrisSize.data,
        meta: state.debrisSize.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisSize);