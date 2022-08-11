import React from "react";
import { Popconfirm, Tag } from 'antd';
import styled from "styled-components";
import TableComponent from "../../Common/TableComponent";

const Container = styled.div`
    width: 100%;

    .ant-table-thead > tr > th {
        background-color: white;
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }
`;

const colorDecoder = {
    "pending": "gold",
    "approved": "green",
    "rejected": "magenta",
}

function TableContainer({ loading, data, meta, handlePageChange, handleRowClick }) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Name of Assessor',
            dataIndex: 'user',
        },
        {
            title: 'Date of survey (dd-mm-yyyy)',
            dataIndex: 'date',
        },
        {
            title: 'Location (site, region, country, lme)',
            dataIndex: 'site',
            render: (record) => <span>{record.name}, {record.region}, {record.country.name}, {record.lme.name}</span>
        },
        {
            title: 'Marine Debris',
            dataIndex: 'debris',
            render: (record) => record.mdi_code
        },
        {
            title: 'Biological identifications',
            dataIndex: 'taxas',
            render: (records) => records.map((record, index) => (
                <span key={index}>{record.identification} {records.length > index + 1 && ","} </span>
            ))
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (record) => <Tag color={colorDecoder[record[0].name]}> {record[0].name} </Tag>
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
                onRow={(record) => ({
                    onClick: () => {
                        handleRowClick(record);
                    },
                })}
            />
        </Container>
    )
}

export default TableContainer;
