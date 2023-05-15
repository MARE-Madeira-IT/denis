import React, { useState, useRef, useMemo, useEffect } from 'react'
import { Col, Form, Input, DatePicker, Row, Tooltip, Upload } from 'antd'
import CountryRemoteSelectContainer from '../../Site/Country/CountryRemoteSelectContainer'
import LmeRemoteSelectContainer from '../../Site/Lme/LmeRemoteSelectContainer'
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet'
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import axios from 'axios'
import CustomTooltip from './CustomTooltip'

const requiredRule = [{ required: true }];

const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
    min-height: 400px;
`;


function ItemDetection({ form, hasInitialData, updateMode, active, currentReport, setDebrisFile, debrisFile }) {
    const [latitude, setLatitude] = useState(24.206889622);
    const [longitude, setLongitude] = useState(-36.2109375);
    const [hasTouched, setHasTouched] = useState([false, false]);
    const [imageUrl, setImageUrl] = useState([]);
    const markerRef = useRef(null)
    const GEOCODE_URL = "https://revgeocode.search.hereapi.com/v1/revgeocode?lang=en";

    const handleLatitude = (e) => {
        setLatitude(e.target.value);
        setHasTouched([true, hasTouched[1]]);
    }

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const handleLongitude = (e) => {
        setLongitude(e.target.value);
        setHasTouched([hasTouched[0], true]);
    }

    const reverseGeoCoding = async () => {
        var api_key = "yVN8zgFigYGIRgP-iUnlq506MygrKQJ8YJkRZ2z4Avs";

        const data = await (await fetch(
            `${GEOCODE_URL}&apiKey=${api_key}&in=circle:${latitude},${longitude};r=90000`
        )).json();

        if (data.items.length) {
            var { address } = data.items[0];
            form.setFieldsValue({
                country: address.countryName,
                region: address.county,
                site: address.city
            });
        } else {
            form.resetFields(['country', 'region', 'site']);
        }
    }

    useEffect(() => {
        if (hasTouched[0] && hasTouched[1]) {
            reverseGeoCoding()
        }
    }, [hasTouched])


    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    var position = marker.getLatLng();
                    form.setFieldsValue({ latitude: position.lat, longitude: position.lng });
                    setLatitude(position.lat);
                    setLongitude(position.lng);
                    setHasTouched([true, true]);
                }
            },
        }),
        [],
    )

    useEffect(() => {
        if (updateMode || currentReport?.id) {
            setTimeout(() => {
                var coords = form.getFieldsValue(['latitude', 'longitude']);

                setLatitude(coords.latitude);
                setLongitude(coords.longitude);
            }, 500);
        }
        else {
            setLatitude(24.206889622);
            setLongitude(-36.2109375);
        }
    }, [currentReport.id, active])

    return (
        <>
            <Row align='bottom' type="flex" gutter={32}>
                <Col xs={24} md={8}>
                    <Form.Item label="Date of survey*" name="date" rules={requiredRule}>
                        <DatePicker style={{ width: "100%" }} placeholder="Date" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label={(
                        <>
                            <span>Custom identifier</span>
                            <CustomTooltip text="The platform generates it's own identifier, however you may add a custom one which will help you identify each report" />

                        </>)} name="custom_id" rules={[{ required: false }]}>
                        <Input placeholder="Ex.: 00001" />
                    </Form.Item>
                </Col>

                <Col xs={24} md={8}>
                    <Form.Item label={(
                        <>
                            <span>Digital object identifier</span>
                            <CustomTooltip text="DeNIS is used as a data repository, for already published work and submitted papers. A DOI, or Digital Object Identifier, is an identifier of such content on the web." />

                        </>)} name="doi" rules={[{ required: false }]}>
                        <Input placeholder="Ex.: 10.1080/15588742.2015" />
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
                    <StyledMapContainer center={[latitude, longitude]} zoom={2} zoomControl={false}>
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

            <br />

            {(hasTouched[0] && hasTouched[1]) &&
                <Row align='middle' type="flex" gutter={32}>
                    <Col xs={24} md={6}>
                        <Form.Item label="Site name*" name="site">
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
                        <Form.Item label="Large marine ecosystem" name="lme">
                            <LmeRemoteSelectContainer />
                        </Form.Item>
                    </Col>
                </Row>
            }
            {!updateMode &&

                <Col span={24}>
                    <p>Photographies of the debris and biological samples (.png, .jpeg, .tiff)</p>
                    <Upload
                        defaultFileList={debrisFile}
                        name="images"
                        listType="picture-card"
                        className="avatar-uploader"
                        accept='.png,.jpeg,.jpg,.tiff'
                        multiple
                        showUploadList
                        maxCount={10}
                        onRemove={(file) => {
                            var fileList = [...debrisFile];
                            var newFileList = fileList.filter(record => record.uid !== file.uid);

                            setDebrisFile(newFileList);
                        }}
                        beforeUpload={(currentFile) => {
                            const isValid = (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/tiff');

                            if (isValid) {
                                setDebrisFile([...debrisFile, currentFile]);
                                var imageUrlList = [];

                                getBase64(currentFile, (item) => {
                                    imageUrlList = [...imageUrl, item];
                                });

                                setImageUrl(imageUrlList);
                            }

                            return false;
                        }}
                    >
                        <div> + <div> Upload </div></div>
                    </Upload>
                </Col>
            }
        </>
    )
}

export default ItemDetection