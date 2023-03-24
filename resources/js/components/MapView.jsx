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
    min-height: 350px;
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

const dummyArray = [
    { latitude: 40.19367295000592, longitude: -10.902581177963048 },
    { latitude: 40.76277526790959, longitude: 5.371322927437167 },
    { latitude: 54.15791653950944, longitude: 7.876975206947187 },
    { latitude: 54.65919706050864, longitude: 4.823211491294351 },
    { latitude: 54.47762205800022, longitude: -0.42299796892972813 },
    { latitude: 43.83140167452694, longitude: 15.47223367921189 },
    { latitude: 39.626406815680035, longitude: 18.447695761130046 },
    { latitude: 43.944265333193414, longitude: 8.659991544294053 },
    { latitude: 40.167060320863484, longitude: 3.0222739153965335 },
    { latitude: 43.26387656927633, longitude: 4.040195153947484 },
    { latitude: 43.14973048661404, longitude: 7.172260503334987 },
    { latitude: 40.346329448933865, longitude: 0.673224903355898 },
    { latitude: 39.74692052405181, longitude: 10.46092912019187 },
    { latitude: 40.1071984305689, longitude: 14.689217341865021 },
    { latitude: 36.16737527437281, longitude: -3.398460050847872 },
    { latitude: 36.92224610868622, longitude: -9.505987482153518 },
    { latitude: 40.167060320863484, longitude: -9.505987482153518 },
    { latitude: 43.0353708331171, longitude: -9.740892383357586 },
    { latitude: 36.984818762076735, longitude: -10.602210354439151 },
    { latitude: 35.850675605416505, longitude: -6.4522237665006905 },
    { latitude: 51.75295556864432, longitude: 2.7090673804577827 },
    { latitude: 50.375246800189394, longitude: 0.04681183347839768 },
    { latitude: 43.774889653378644, longitude: -2.6937453472356796 },
    { latitude: 53.69687467168269, longitude: 5.684529462375918 },
    { latitude: 58.45284550294565, longitude: 9.991119317783754 },
    { latitude: 54.70446451202147, longitude: 15.47223367921189 },
    { latitude: 54.47762205800022, longitude: 11.08734219006939 },
    { latitude: 54.52309164377778, longitude: 10.147722585253122 },
    { latitude: 46.588805542184105, longitude: -2.2239355448275537 },
    { latitude: 42.170872179466905, longitude: -8.722971144806644 },
    { latitude: 43.54830706202795, longitude: -9.27108258094946 },
    { latitude: 52.521877482972606, longitude: -4.807889458072248 },
    { latitude: 52.47420835423168, longitude: -6.13901723156194 },

    { latitude: 38.04066059295866, longitude: -74.6529463459235 },
    { latitude: 33.271780229256116, longitude: -78.64632966639257 },
    { latitude: 34.89297595562521, longitude: -76.92369372422944 },
    { latitude: 28.29654649065066, longitude: -79.58594927120882 },
    { latitude: 25.291599888091717, longitude: -79.1944411025354 },
    { latitude: 44.50537497198848, longitude: -67.13598950739346 },
    { latitude: 43.37780898571782, longitude: -68.9369270832913 },
    { latitude: 31.819734012216507, longitude: -79.66425090494353 },
    { latitude: 30.141556834270588, longitude: -87.18120774347355 },
    { latitude: 30.073819343215717, longitude: -83.89253912661667 },
    { latitude: 43.49152777024114, longitude: -68.70202218208722 },
    { latitude: 32.61467177647067, longitude: -78.48972618287337 },
    { latitude: 47.70707086259254, longitude: -64.39543211062959 },
    { latitude: 43.43469501394618, longitude: -69.87654647205773 },
    { latitude: 40.46557810806003, longitude: -72.46050038530242 },
    { latitude: 43.20683010899857, longitude: -69.17183176844553 },
    { latitude: 35.91411715227659, longitude: -74.96615266481243 },
    { latitude: 38.04066051023905, longitude: -74.73124776360837 },
    { latitude: 31.218995184060365, longitude: -80.68217192744464 },
    { latitude: 32.54869290233627, longitude: -79.58594905515902 },
];
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
            <StyledMapContainer whenCreated={(mapInstance) => { setMap(mapInstance) }} center={[32.427876, -17.011401]} zoom={2} minZoom={2} zoomControl={false}>
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

                {/* {dummyArray.map((pos) => (
                    <Marker position={[pos.latitude, pos.longitude]} />
                ))} */}
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