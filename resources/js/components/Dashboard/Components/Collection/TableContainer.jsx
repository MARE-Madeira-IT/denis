import React, { useState, useRef, useEffect } from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import TableComponent from "../../Common/TableComponent";
import { getColumnSearchProps } from "./Search";
import StopPropagation from "../../Common/StopPropagation";
import { connect } from "react-redux";
import { deleteCollection, exportCollection } from "../../../../redux/collection/actions";

const Container = styled.div`
    width: 100%;

    .ant-table-thead > tr > th {
        background-color: white;
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }
`;

const Download = styled.img`
    width: 20px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        width: 21px;
    }
`;

function TableContainer({ loading, data, meta, handlePageChange, filters, setFilters, deleteCollection }) {
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


    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            ...getColumnSearchProps('id', searchInput, handleFilter, handleFilterClear),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            render: (record) => record ? record : "---",
        },
        {
            title: 'Digital object identifier (doi)',
            dataIndex: 'doi',
            render: (record) => record ? record : "---",
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (record) => record ? record : "---",
        },
        {
            title: 'Submitted at',
            dataIndex: 'created_at',
            render: (record) => record,
        },

        {
            title: '',
            dataIndex: 'id',
            render: (_, record) =>
                <StopPropagation> {
                    <Popconfirm title="Sure to download?" onConfirm={() => exportCollection({ collection: record.id })}>
                        <Download src="/images/icons/download.svg" alt="download" />
                    </Popconfirm>
                }</StopPropagation>
            ,
        },
        {
            title: '',
            dataIndex: 'id',
            render: (_, record) =>
                <StopPropagation> {
                    <Popconfirm title="Sure to delete?" onConfirm={() => deleteCollection(record.id)}>
                        <a>Delete</a>
                    </Popconfirm>
                }</StopPropagation>
            ,
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
            />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCollection: (id) => dispatch(deleteCollection(id)),
        exportCollection: (id) => dispatch(exportCollection(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
        currentUser: state.auth.currentUser
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);