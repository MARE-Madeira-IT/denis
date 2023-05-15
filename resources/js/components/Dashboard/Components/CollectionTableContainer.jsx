import React, { useRef, useEffect } from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteCollection, exportCollection, fetchSelfCollections } from "../../../redux/collection/actions";
import TableComponent from "../Common/TableComponent";
import StopPropagation from "../Common/StopPropagation";

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

function CollectionTableContainer(props) {
    const { data, meta, loading } = props;
    const searchInput = useRef(null);

    useEffect(() => {

        props.fetchSelfCollections();
    }, [])


    const handlePageChange = (pagination) => {
        props.fetchSelfCollections(pagination.current);
    }


    const columns = [
        {
            title: '#',
            dataIndex: 'id',
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
                    <Popconfirm title="Sure to delete?" onConfirm={() => props.deleteCollection(record.id)}>
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
        fetchSelfCollections: (page, filters) => dispatch(fetchSelfCollections(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
        currentUser: state.auth.currentUser,
        loading: state.collection.loading,
        data: state.collection.selfData,
        meta: state.collection.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionTableContainer);