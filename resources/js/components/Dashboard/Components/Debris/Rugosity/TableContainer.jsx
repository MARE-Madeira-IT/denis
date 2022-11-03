import React from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import TableComponent from "../../../Common/ModalTableComponent";
import FormContainer from "./FormContainer";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange, handleSearch, handleCreate, form, handleDelete }) {

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
                form={<FormContainer form={form} />}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                title="Rugosity classes"
                
            />
        </Container>
    )
}

export default TableContainer;
