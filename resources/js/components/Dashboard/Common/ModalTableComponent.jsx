import React from "react";
import styled from "styled-components";
import Table from "antd/es/table"
import { Input } from "antd";
import debounce from 'lodash/debounce';

const Container = styled.div`
    background: transparent;
    border-radius: 5px;

    .ant-table-thead > tr > th {
        background-color: #EAEAEA;
        font-weight: bold;
    }

    .ant-table-cell {
        padding: 15px 20px !important;
    }

    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }

    .table-row  {
        &:hover {
            cursor: pointer;
        }
    }
    
    .ant-table-wrapper {
        background-color: white;
    }
    
    .ant-pagination {
        padding: 0px 20px;
        box-sizing: border-box;
    }
    
    .ant-pagination-total-text {
        margin-right: auto;
    }

    
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #CDCDCD;
    align-items: flex-end;

    h2 {
        background-color: #DFDFDF;
        
        margin-bottom: 0px;
        font-family: 'Lato';
        padding: 25px 60px 25px 20px;
        min-width: 55%;
        font-size: 26px;
        display: inline-block;
        line-height: 30px;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 0; right: -28px;
            border-top: 28px solid transparent;
            border-left: 28px solid #DFDFDF;
            width: 0;
        }
    }

    span {
        flex: 1;
        background-color: #DFDFDF;
        padding: 15px 20px;
        box-sizing: border-box;
        margin: 0px;
        text-align: right;

        img {
            width: 15px;
            margin: 0px 10px;
        }
    }
    
`;

const TableControls = styled.div`
    background-color: #DFDFDF;
    border-bottom: 1px solid #CDCDCD;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .search {               
        height: 100%;
        box-sizing: border-box;
        margin: auto 0px;
    }

    img {
        width: 15px;
        margin: 0px 10px 0px 0px;
    }


        

        button {
            display: flex;
        justify-content: space-around;
        align-items: center;
            height: 100%;
            padding: 15px 20px;
            border: 0px;
            border-left: 1px solid #CDCDCD;
            box-sizing: border-box;
            margin: auto;
            background-color: transparent;
            box-shadow: none;

            img {
                margin: 0px 10px;
            }
        }

        

        

        .dark-background {
            background-color: #333334;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
        }

        
    
`;

function TableComponent({ onRow, columns, data, meta, handlePageChange, loading,
    showQuickJumper = false, handleExpandable, bordered = false, title, handleSearch, form, handleCreate }) {

    return (
        <div>
            <TitleContainer>
                <h2>{title}</h2>
                <span><img src="/icons/fullscreen.svg" /> Open as page</span>
            </TitleContainer>
            <TableControls>
                <Input
                    placeholder="Search"
                    bordered={false}
                    onChange={debounce(handleSearch, 800)}
                    className="search"
                    prefix={<img src="/icons/search.svg" />}
                    style={{
                        flex: "1",
                    }}
                />
                <button><img src="/icons/export.svg" /> Export</button>

            </TableControls>
            <TableControls>
                {form}

                <button onClick={handleCreate} className="dark-background"><img src="/icons/add.svg" /> Create </button>

            </TableControls>
            <Container>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered={bordered}
                    onRow={onRow}
                    onChange={handlePageChange}
                    pagination={meta ? {
                        showQuickJumper: showQuickJumper,
                        total: meta.total,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`,
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
