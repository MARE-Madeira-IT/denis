import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCollections, fetchCollection } from "../../../../redux/collection/actions";
import TableContainer from "./TableContainer";
import FormContainer from "./FormContainer";
import PageHeader from "../../Common/PageHeader";
import { maxWidthStyle } from "../../dashboardHelper";
import CollectionFilterContainer from "./CollectionFilterContainer";

const Content = styled.div`
    width: 100%;
    margin: auto;
    ${maxWidthStyle}
`;

const ContentContainer = styled.div`
    background-color: white;
    width: 100%;
    
`;




const Container = styled.div`
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    position: relative;
`;


function Collection(props) {
    const [filters, setFilters] = useState({});
    const [activeForm, setActiveForm] = useState(false);
    var { data, loading, meta } = props;

    useEffect(() => {
        props.fetchCollections(1, filters);
    }, [filters])

    function handlePageChange(pagination) {
        props.fetchCollections(pagination.current, filters);
    }

    return (
        <Container>
            <PageHeader
                title="Collections overview"
                subtitle=""
            />
            
            <Content>
                <FormContainer setActiveForm={setActiveForm} activeForm={activeForm} />

                <ContentContainer>
                    <CollectionFilterContainer setActiveForm={() => setActiveForm(true)} />
                    <br />
                    <TableContainer
                        handlePageChange={handlePageChange}
                        data={data}
                        loading={loading}
                        meta={meta}
                        setFilters={setFilters}
                        filters={filters}
                    />
                </ContentContainer>

            </Content>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollections: (page, filters) => dispatch(fetchCollections(page, filters)),
        fetchCollection: (id) => dispatch(fetchCollection(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.collection.loading,
        data: state.collection.data,
        meta: state.collection.meta,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);