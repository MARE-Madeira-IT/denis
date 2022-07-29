import React from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import TableComponent from "../../../Common/ModalTableComponent";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange }) {

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
                    <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
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
                handlePageChange={(aPage) => handlePageChange(aPage)}
                title="Rugosity classes"
            />
        </Container>
    )
}

export default TableContainer;
