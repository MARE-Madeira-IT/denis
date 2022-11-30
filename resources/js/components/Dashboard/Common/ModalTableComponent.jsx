import React from "react";
import styled from "styled-components";
import Table from "antd/es/table"
import { Input } from "antd";
import debounce from 'lodash/debounce';
import Tour from "../Hooks/Tour";
import { connect } from "react-redux";

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
        color: transparent;
        flex: 1;
        background-color: #DFDFDF;
        padding: 15px 20px;
        box-sizing: border-box;
        margin: 0px;
        text-align: right;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */

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

    .export {
        opacity: 0;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    
`;

function TableComponent({ onRow, columns, data, meta, handlePageChange, loading,
    showQuickJumper = false, handleExpandable, bordered = false, title, handleSearch, form, handleCreate, permissionLevel }) {

    return (
        <Tour itemName="formTour" updateCriteria={[data]} condition={data.length && !loading}>
            <TitleContainer>
                <h2>{title}</h2>
                <span>Open as page</span>
            </TitleContainer>
            <TableControls>
                <Input
                    data-intro="Type for any keywords to dynamically update the table content and fit your search criteria"
                    data-title="Search any content you wish"
                    data-step='1'
                    placeholder="Search"
                    bordered={false}
                    onChange={debounce(handleSearch, 800)}
                    className="search"
                    prefix={<img src="/icons/search.svg" />}
                    style={{
                        flex: "1",
                    }}
                />
                <button className="export" data-intro="Export data on the table below as a CSV file"
                    data-title="Export data"
                    data-step='2'><img src="/icons/export.svg" /> Export</button>

            </TableControls>
            {permissionLevel === 2 &&
                <TableControls data-intro="Fill the form and create a new entry which will be directly usable on the report form"
                    data-title="Create row"
                    data-step='3'>
                    {form}

                    <button onClick={handleCreate} className="dark-background"><img src="/icons/add.svg" /> Create </button>

                </TableControls>
            }

            <Container data-intro="All operations on the controls above filter the data shown here"
                data-title="Visualize the data"
                data-step='4'>
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

        </Tour>
    );
}

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
    };
};

export default connect(mapStateToProps, null)(TableComponent);
