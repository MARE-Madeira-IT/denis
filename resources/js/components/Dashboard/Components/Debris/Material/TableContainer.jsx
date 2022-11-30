import React, { useEffect } from "react";
import styled from "styled-components";
import TableComponent from "../../../Common/ModalTableComponent";
import FormContainer from "./FormContainer";
import { handleTableDelete } from "../../../Common/HandleTableDelete";
import { connect } from "react-redux";

const Container = styled.div`
    width: 100%;
`;

function TableContainer({ loading, data, meta, handlePageChange, handleDelete, handleSearch, handleCreate, form, permissionLevel }) {

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

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
    };
};

export default connect(mapStateToProps, null)(TableContainer);
