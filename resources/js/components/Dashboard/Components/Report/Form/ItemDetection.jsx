import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Col, Form, Input, DatePicker, Row } from 'antd'
import CountryRemoteSelectContainer from '../../Site/Country/CountryRemoteSelectContainer'
import LmeRemoteSelectContainer from '../../Site/Lme/LmeRemoteSelectContainer'
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';
import debounce from 'lodash/debounce';

const requiredRule = [{ required: true }];

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
    min-height: 400px;
`;

function ItemDetection({ form, updateMode, currentReport }) {
    const [latitude, setLatitude] = useState(32.427876);
    const [longitude, setLongitude] = useState(-17.011401);
    const markerRef = useRef(null)

    const handleLatitude = (e) => {
        setLatitude(e.target.value);
    }

    const handleLongitude = (e) => {
        setLongitude(e.target.value);
    }

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    var position = marker.getLatLng();
                    form.setFieldsValue({ latitude: position.lat, longitude: position.lng });
                    setLatitude(position.lat);
                    setLongitude(position.lng);
                }
            },
        }),
        [],
    )

    useEffect(() => {
        if (updateMode) {
            setTimeout(() => {
                var coords = form.getFieldsValue(['latitude', 'longitude']);

                setLatitude(coords.latitude);
                setLongitude(coords.longitude);
            }, 500);

        }
        else {
            setLatitude(32.427876);
            setLongitude(-17.011401);
        }
    }, [currentReport.id])

    return (
        <>
            <Row type="flex" gutter={32}>
                <Col xs={24} md={8}>
                    <Form.Item label="Date of survey*" name="date" rules={requiredRule}>
                        <DatePicker style={{ width: "100%" }} placeholder="Date" />
                    </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                    <Form.Item label="Ongoing Surveys Modality" name="on_going_survey" rules={[{ required: false }]}>
                        <Input placeholder="Ex.: Diving transect (25 m)" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Custom identifier" name="custom_id" rules={[{ required: false }]}>
                        <Input placeholder="Ex.: 00001" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Site name*" name="site" rules={requiredRule}>
                        <Input placeholder="Site" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Region/Province*" name="region" rules={requiredRule}>
                        <Input placeholder="Region/Province" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Country*" name="country" rules={requiredRule}>
                        <CountryRemoteSelectContainer />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item label="Large marine ecosystem*" name="lme" rules={requiredRule}>
                        <LmeRemoteSelectContainer />
                    </Form.Item>
                </Col>
            </Row>
            <br />
            <Row align='middle' type="flex" gutter={32}>
                <Col xs={24} md={12}>
                    <h3>Introduce coordinates using the inputs below or move the picker on the map to the desired position.</h3>
                    <Form.Item label="Latitude*" name="latitude" rules={requiredRule}>
                        <Input onChange={debounce(handleLatitude, 800)} placeholder="Latitude" />
                    </Form.Item>
                    <Form.Item label="Longitude*" name="longitude" rules={requiredRule}>
                        <Input onChange={debounce(handleLongitude, 800)} placeholder="Longitude" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <StyledMapContainer center={[32.427876, -17.011401]} zoom={9} zoomControl={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {(!isNaN(latitude) && !isNaN(longitude)) &&
                            <Marker eventHandlers={eventHandlers} draggable position={[latitude, longitude]} ref={markerRef} />
                        }
                        <ZoomControl position='bottomright'></ZoomControl>
                    </StyledMapContainer>
                </Col>
            </Row>
        </>
    )
}

export default ItemDetection