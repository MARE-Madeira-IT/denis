import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .leaflet-container {
    height: 100%;
    border-radius: 12px;
}
`;

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
    min-height: 300px;
`;



function MapViewModal({ customData }) {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map) {
            map.invalidateSize();
        }

        if ((customData.latitude && customData.longitude) && map) {
            map.setView([customData.latitude, customData.longitude], 7)
        }
    }, [customData, map])

    return (
        <Container className='map-container'>
            <StyledMapContainer whenCreated={(mapInstance) => { setMap(mapInstance) }} center={[32.427876, -17.011401]} zoom={2} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {(customData.latitude && customData.longitude) && <Marker position={[customData.latitude, customData.longitude]} />}


                <ZoomControl position='bottomright'></ZoomControl>
            </StyledMapContainer>
        </Container >
    )
}

export default MapViewModal;