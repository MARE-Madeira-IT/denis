import React from "react";
import { Avatar, Popconfirm, Tag } from 'antd';
import styled from "styled-components";
import TableComponent from "../../Common/TableComponent";
import { maxWidthStyle } from "../../dashboardHelper";

const Container = styled.div`
    width: 100%;
    
.editable-row {
    cursor: pointer;
}
    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }
`;

const colorDecoder = {
    "admin": "gold",
    "validator": "cyan",
}

function TableContainer({ loading, data, meta, handlePageChange, setCurrentUser, setVisible }) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: '',
            dataIndex: 'image',
            render: (image) => <Avatar size="large" icon={<img src={image} alt="profile" />} />
        },

        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Institution',
            dataIndex: 'institution',
        },
        {
            title: 'Localization',
            dataIndex: 'country',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Roles',
            dataIndex: 'roles',
            render: (records) => Object.entries(records).map((value) => (
                <span key={value[0]}>
                    {value[1] && <Tag color={colorDecoder[value[0]]}> {value[0]} </Tag>}
                </ span>
            ))
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
                handlePageChange={(aPage) => handlePageChange(aPage)}
                onRow={(record) => ({
                    onClick: () => {
                        setCurrentUser(record);
                        setVisible(true);
                    },
                })}
            />
        </Container>
    )
}

export default TableContainer;
