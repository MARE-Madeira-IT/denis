import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchDebrisCategories } from "../../../../../redux/debrisCategory/actions";
import TableContainer from "./TableContainer";

const ContentContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Lato';
`;

const Table = styled.div`
    width: 100%;
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

    h3 {
        margin: 0px;
        padding: 15px 20px;
        box-sizing: border-box;
        font-weight: bold;
        opacity: .8;
        min-width: 55%;
    }

    .controls {
        display: flex;
        justify-content: space-around;
        align-items: center;

        p {
            height: 100%;
            padding: 15px 20px;
            border-left: 1px solid #CDCDCD;
            box-sizing: border-box;
            margin: auto;
        }

        .dark-background {
            background-color: #333334;
            color: #fff;
            font-weight: bold;
            
        }

        img {
            width: 15px;
            margin: 0px 10px;
        }
    }
`;

function DebrisCategory({ data, loading, meta, fetchDebrisCategories }) {
    const [filters, setFilters] = useState({});

    useEffect(() => {
        fetchDebrisCategories();
    }, [])

    function handlePageChange(pagination) {
        fetchDebrisCategories(pagination.current, filters);
    }

    return (
        <Container>
            <ContentContainer>
                <Table>
                    <TitleContainer>
                        <h2>Master list of debris categories</h2>
                        <span><img src="/icons/fullscreen.svg" /> Open as page</span>
                    </TitleContainer>
                    <TableControls>
                        <h3>Records ({meta.total})</h3>
                        <div className="controls">
                            <p><img src="/icons/export.svg" /> Export</p>
                            <p><img src="/icons/search.svg" /> Search</p>
                            <p className="dark-background">Add record <img src="/icons/add.svg" /></p>
                        </div>
                    </TableControls>
                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                    />
                </Table>
            </ContentContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDebrisCategories: (page, filters) => dispatch(fetchDebrisCategories(page, filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.debrisCategory.loading,
        data: state.debrisCategory.data,
        meta: state.debrisCategory.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DebrisCategory);