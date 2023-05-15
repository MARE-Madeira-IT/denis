import React, { useState, useRef, useEffect } from "react";
import { Button, Input, Popconfirm, Radio, Row, Space, Tag } from 'antd';
import styled from "styled-components";
import TableComponent from "../../Common/TableComponent";
import { getColumnSearchProps } from "./Search";
import StopPropagation from "../../Common/StopPropagation";
import { connect } from "react-redux";
import { deleteReport } from "../../../../redux/report/actions";

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

function TableContainer({ permissionLevel, currentUser, loading, data, meta, handlePageChange, handleRowClick, filters, setFilters, updateState, deleteReport }) {
    const [status, setStatus] = useState(undefined);
    const [permissionColumns, setPermissionColumns] = useState([]);
    const searchInput = useRef(null);

    const handleFilter = (value, field) => {
        var newFilters = {};
        newFilters[field] = value;
        setFilters({ ...filters, ...newFilters });
    };

    const handleFilterClear = (setSelectedKeys, fieldname) => {
        var newFilters = { ...filters };
        delete newFilters[fieldname]
        setSelectedKeys(undefined)
        setFilters(newFilters);
    };

    const handleStateUpdate = (state, report) => {
        updateState({ report_id: report, validation_id: state });
    };


    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            ...getColumnSearchProps('id', searchInput, handleFilter, handleFilterClear),
        },
        {
            title: 'Custom identifier',
            dataIndex: 'custom_id',
            render: (record) => record ? record : "---",
            ...getColumnSearchProps('customid', searchInput, handleFilter, handleFilterClear),
        },
        {
            title: 'Assessor',
            dataIndex: 'user',
            ...getColumnSearchProps('user', searchInput, handleFilter, handleFilterClear),
            render: (record) => record.name
        },
        {
            title: 'Date of survey',
            dataIndex: 'date',
            ...getColumnSearchProps('date', searchInput, handleFilter, handleFilterClear),
        },
        {
            title: 'Location (site, region, country, lme)',
            dataIndex: 'site',
            ...getColumnSearchProps('location', searchInput, handleFilter, handleFilterClear),
            render: (record) => <span>{record.value}, {record.region}, {record?.country?.name}, {record?.lme?.name}</span>
        },
        {
            title: 'Debris',
            dataIndex: 'debris',
            ...getColumnSearchProps('debris', searchInput, handleFilter, handleFilterClear),
            render: (record) => record.name
        },
        {
            title: 'Biodiversity',
            dataIndex: 'taxas',
            ...getColumnSearchProps('taxas', searchInput, handleFilter, handleFilterClear),
            render: (records) => records.map((record, index) => (
                <span key={index}>{record.identification} {records.length > index + 1 && ","} </span>
            ))
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
                <div
                    style={{
                        padding: 8,
                    }}
                >
                    <Radio.Group value={selectedKeys} onChange={(e) => setSelectedKeys(e.target.value)}>
                        <Space direction="vertical">
                            <Radio value={1}>Pending</Radio>
                            <Radio value={2}>Approved</Radio>
                            <Radio value={3}>Rejected</Radio>
                        </Space>
                    </Radio.Group>
                    <Row>
                        <Button
                            type="primary"
                            onClick={() => setFilters({ ...filters, status: selectedKeys })}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Ok
                        </Button>
                        <Button
                            onClick={() => clearFilters && handleFilterClear(setSelectedKeys, 'status')}
                            size="small"
                            style={{
                                width: 90,
                            }}
                        >
                            Reset
                        </Button>

                    </Row>
                </div>
            ),
            filterSearch: true,
            render: (record) => <Tag color={colorDecoder[record[record.length - 1].name]}> {record[record.length - 1].name} </Tag>
        },
        {
            title: 'Actions',
            dataIndex: '',
            render: (_, record) =>
                <StopPropagation>
                    {record.status.length && (
                        record.status[record.status.length - 1].id == 1 ? (
                            <>
                                <Popconfirm title="Sure to approve?" onConfirm={() => handleStateUpdate(2, record.id)}>
                                    <a>Approve | </a>
                                </Popconfirm>

                                <Popconfirm title="Sure to reject?" onConfirm={() => handleStateUpdate(3, record.id)}>
                                    <a>Reject</a>
                                </Popconfirm>
                            </>

                        ) : record.status[record.status.length - 1].id == 2 ? (
                            <Popconfirm title="Sure to reject?" onConfirm={() => handleStateUpdate(3, record.id)}>
                                <a>Reject</a>
                            </Popconfirm>
                        ) : record.status[record.status.length - 1].id == 3 ? (
                            <Popconfirm title="Sure to approve?" onConfirm={() => handleStateUpdate(2, record.id)}>
                                <a>Approve</a>
                            </Popconfirm>
                        ) : null)}
                </StopPropagation>,
        },
        {
            title: '',
            dataIndex: '',
            render: (_, record) =>
                <StopPropagation> {
                    (permissionLevel == 2 || currentUser.id == record.user.id) && (
                        <Popconfirm title="Sure to delete?" onConfirm={() => deleteReport(record.id)}>
                            <a>Delete</a>
                        </Popconfirm>
                    )
                }</StopPropagation>
            ,
        },
    ];

    useEffect(() => {
        var newColumns = columns;
        if (permissionLevel == 0) {
            newColumns = columns.filter((val, index) => index !== 8);
        }

        setPermissionColumns(newColumns);
    }, [permissionLevel])


    return (
        <Container>
            <TableComponent
                loading={loading}
                data={data}
                columns={permissionColumns}
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteReport: (id) => dispatch(deleteReport(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
        currentUser: state.auth.currentUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);