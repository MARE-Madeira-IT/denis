import React, { useEffect } from "react";
import styled from "styled-components";
import TableComponent from "../../../Common/ModalTableComponent";
import FormContainer from "./FormContainer";
import { handleTableDelete } from "../../../Common/HandleTableDelete";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;

    .ant-table-thead > tr > th {
        background-color: white;
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }
`;

function TableContainer({ loading, data, meta, handlePageChange, handleSearch, handleCreate, form, handleDelete, permissionLevel }) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            render: (category) => <span>{category.name}</span>
        },
    ];

    useEffect(() => {
        if (permissionLevel === 2) {
            columns.push(handleTableDelete(handleDelete));
        }
    }, [permissionLevel])

    return (
        <Container>
            <TableComponent
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handleSearch={handleSearch}
                handleCreate={handleCreate}
                form={<FormContainer form={form} />}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                title="Sub category"
            />
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
    };
};

export default connect(mapStateToProps, null)(TableContainer);
