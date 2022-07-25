import React from "react";
import styled from "styled-components";
import Table from "antd/es/table"

const Container = styled.div`
    background: transparent;
    border-radius: 5px;

    .table-row  {
        &:hover {
            cursor: pointer;
        }
    }
`;


function TableComponent({ onRow, columns, data, meta, handlePageChange, loading,
    showQuickJumper = false, handleExpandable, bordered = false }) {

    return (
        <div>
            <Container>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered={bordered}
                    onRow={onRow}
                    onChange={handlePageChange}
                    pagination={meta ? {
                        showQuickJumper: showQuickJumper,
                        total: meta.total,
                        showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} from ${total}`,
                        total: meta.total,
                        current: meta.current_page,
                        pageSize: meta.per_page,
                    } : false}
                    columns={columns}
                    loading={loading}
                    dataSource={data}
                    size="small"
                    rowKey={(record) => record.id}
                    expandable={handleExpandable}
                />
            </Container>

        </div>
    );
}

export default TableComponent;
