import React, { useEffect, useState, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';
import { connect } from "react-redux";



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
    min-height: 400px;
`;

const Field = styled.div`
    padding: 5px 5px 5px 0px;
    box-sizing: border-box;
    

    p {
        margin: 0px;
        font-size: 14px !important;
    }

    .value {
        opacity: .5;
    }

`;

function MapView({ data, customData }) {
    const [map, setMap] = useState(null);

    const FieldContainer = ({ name, value }) => (
        <Field className='field-width'>
            <p className='name'>{name}</p>
            <p className='value'>{value}</p>

        </Field>
    )

    useEffect(() => {
        if (map) {
            map.invalidateSize();
        }
    }, [map])

    return (
        <Container className='map-container'>
            <StyledMapContainer whenCreated={(mapInstance) => { setMap(mapInstance) }} center={[32.427876, -17.011401]} zoom={2} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {customData ? customData.map((report, index) =>
                    <Marker key={report.id} position={[report.latitude, report.longitude]}>
                        <Popup>
                            <FieldContainer name="Date of survey" value={report.date} />

                            <FieldContainer name="Debris" value={report.debris.name} />

                            <Field className='field-width'>
                                <p className='name'>Taxa</p>
                                {report?.taxas.map((taxa => (

                                    <p key={"taxa_" + taxa.id} className='value'>{taxa.identification} ({taxa.level})</p>

                                )))}

                            </Field>
                        </Popup> : <></>
                    </Marker>
                ) : data.map((report, index) =>
                    <Marker key={report.id} position={[report.latitude, report.longitude]}>
                        <Popup>
                            <FieldContainer name="Date of survey" value={report.date} />
                            <FieldContainer name="Debris" value={report.debris?.name} />

                            <Field className='field-width'>
                                <p className='name'>Taxa</p>
                                {report.taxas.map((taxa => (

                                    <p key={"taxa_" + taxa.id} className='value'>{taxa.identification} ({taxa.level})</p>

                                )))}

                            </Field>
                        </Popup>
                    </Marker>
                )}
                <ZoomControl position='bottomright'></ZoomControl>
            </StyledMapContainer>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.mapData,
    };
};

export default connect(mapStateToProps, null)(MapView);