import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MapView from './MapView';
import { connect } from 'react-redux';
import { fetchReportsCoordinates } from '../redux/report/actions';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

const BackButton = styled(Link)`
    position: absolute;
    top: 28px;
    left: 28px;
    width: 50px;
    border-radius: 50px;
    background: #ffffff;
    height: 50px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
    }
`;


function MapContainer({ fetchReportsCoordinates }) {

    useEffect(() => {
        fetchReportsCoordinates();
    }, [])


    return (
        <Container>
            <BackButton to="/">
                <img src="/images/map/back-button.svg" alt="back-button" loading='eager' />
            </BackButton>
            <MapView />
        </Container>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchReportsCoordinates: () => dispatch(fetchReportsCoordinates()),
    };
};

export default connect(null, mapDispatchToProps)(MapContainer);