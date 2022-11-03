import React from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import TableComponent from "../../../Common/ModalTableComponent";
import FormContainer from "./FormContainer";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange, handleDelete, handleSearch, handleCreate, form }) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            editable: true,
        },
        {
            title: 'Operation',
            dataIndex: 'Operation',
            render: (_, record) =>
                data.length >= 1 ? (
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];


    return (
        <Container>
            <TableComponent
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handleSearch={handleSearch}
                handleCreate={handleCreate}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                title="Materials"
                form={<FormContainer form={form} />}
            />
        </Container>
    )
}

export default TableContainer;
