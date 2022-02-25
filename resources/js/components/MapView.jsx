import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const positions = [
    [32.427876, -17.011401],
    [32.572217, -16.986117],
    [32.58945, -16.8105],
    [32.606383, -16.514717],
    [32.622217, -17.025],
    [32.632217, -16.82305]
]

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

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
`;

function MapView() {
    return (
        <Container>
            <BackButton to="/">
                <img src="/images/map/back-button.svg" alt="back-button" loading='eager' />
            </BackButton>
            <StyledMapContainer center={positions[0]} zoom={9} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {positions.map((coordinates, index) =>
                    <Marker key={index} position={coordinates}>
                        <Popup>
                            Lorem Ipsum
                        </Popup>
                    </Marker>
                )}
                <ZoomControl position='bottomright'></ZoomControl>
            </StyledMapContainer>
        </Container>
    )
}

export default MapView