import React, { useEffect } from "react";
import { Popconfirm } from 'antd';
import styled from "styled-components";
import ModalTableComponent from "../../../Common/ModalTableComponent";
import FormContainer from "./FormContainer";
import { connect } from "react-redux";
import { handleTableDelete } from "../../../Common/HandleTableDelete";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange, handleSearch, handleCreate, form, handleDelete, permissionLevel }) {
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

    ];

    useEffect(() => {
        if (permissionLevel === 2) {
            columns.push(handleTableDelete(handleDelete));
        }
    }, [permissionLevel])



    return (
        <Container>
            <ModalTableComponent
                loading={loading}
                data={data}
                columns={columns}
                meta={meta}
                handleSearch={handleSearch}
                handleCreate={handleCreate}
                form={<FormContainer form={form} />}
                handlePageChange={(aPage) => handlePageChange(aPage)}
                title="Master list of debris categories"
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

