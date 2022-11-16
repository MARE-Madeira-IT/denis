import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from "react-redux";
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

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
`;

const Field = styled.div`
    padding: 5px 5px 5px 0px;
    box-sizing: border-box;
    font-family: "Lato";

    p {
        margin: 0px;
    }

    .value {
    }

    .name {
        opacity: .5;
    }
`;

function MapView({ fetchReportsCoordinates, data }) {

    useEffect(() => {
        fetchReportsCoordinates();
    }, [])

    const FieldContainer = ({ name, value }) => (
        <Field className='field-width'>
            <p className='value'>{value}</p>
            <p className='name'>{name}</p>
        </Field>
    )



    return (
        <Container>
            <BackButton to="/">
                <img src="/images/map/back-button.svg" alt="back-button" loading='eager' />
            </BackButton>
            <StyledMapContainer center={[32.427876, -17.011401]} zoom={9} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data.map((report, index) =>
                    <Marker key={report.id} position={[report.latitude, report.longitude]}>
                        <Popup>
                            <FieldContainer name="Date of survey" value={report.date} />
                            <FieldContainer name="Debris" value={report.debris?.name} />

                            <Field className='field-width'>
                                {report.taxas.map((taxa => (

                                    <p key={"taxa_" + taxa.id} className='value'>{taxa.identification} ({taxa.level})</p>

                                )))}
                                <p className='name'>Taxa</p>
                            </Field>
                        </Popup>
                    </Marker>
                )}
                <ZoomControl position='bottomright'></ZoomControl>
            </StyledMapContainer>
        </Container>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchReportsCoordinates: () => dispatch(fetchReportsCoordinates()),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.mapData,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapView);