import React, { useState, useEffect } from 'react'
import { Modal, Button, Row, Col, DatePicker, Input, AutoComplete } from 'antd'
import { exportReports } from "../../../../redux/report/actions";
import styled from "styled-components";
import { Create, dimensions } from '../../dashboardHelper';
import { connect } from "react-redux";
import moment from 'moment';
import { fetchSiteCountriesSelector } from '../../../../redux/siteCountry/actions';
import { fetchSiteLmesSelector } from '../../../../redux/siteLme/actions';
import { fetchSitesSelector } from '../../../../redux/site/actions';
import { fetchSiteRegionsSelector } from '../../../../redux/siteRegion/actions';
import DebrisCategoryRemoteCascadeContainer from '../Debris/Category/DebrisCategoryRemoteCascadeContainer';

const { RangePicker } = DatePicker;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;


    .ant-spin-dot-item {
        background-color: #fff;
    }
    
`;

const CustomModal = styled(Modal)`
    .ant-modal-body {
        padding: 30px 60px;
    } 
`;

function ExportContainer(props) {
    const { activeForm, countries, lmes, regions, sites } = props;
    const [data, setData] = useState({})

    useEffect(() => {
        props.fetchSiteCountriesSelector();
        props.fetchSiteLmesSelector();
        props.fetchSitesSelector();
        props.fetchSiteRegionsSelector();
    }, [])

    const handleCancel = () => {
        setData({});
        props.setActiveForm(false);
    };

    return (

        <CustomModal
            width={720}
            title="Export data"
            visible={activeForm}
            onCancel={handleCancel}
            centered
            destroyOnClose
            footer={null}
        >
            <Row type="flex" gutter={[32, 32]}>
                <Col xs={24} md={12}>
                    <AutoComplete
                        options={sites}
                        style={{ width: "100%" }}
                        value={data.site}
                        onChange={(e) => setData({ ...data, site: e })}
                        size="large"
                        placeholder='Site'
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <AutoComplete
                        options={regions}
                        style={{ width: "100%" }}
                        value={data.region}
                        onChange={(e) => setData({ ...data, region: e })}
                        size="large"
                        placeholder='Region'
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <AutoComplete
                        options={countries}
                        style={{ width: "100%" }}
                        value={data.country}
                        onChange={(e) => setData({ ...data, country: e })}
                        size="large"
                        placeholder='Country'
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <AutoComplete
                        options={lmes}
                        style={{ width: "100%" }}
                        value={data.lme}
                        onChange={(e) => setData({ ...data, lme: e })}
                        size="large"
                        placeholder='Larme Marine Ecossystem'
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <DebrisCategoryRemoteCascadeContainer size="large" value={data.debris} onChange={(e) => setData({ ...data, debris: e.target.value })} placeholder='Debris' />
                </Col>
                <Col xs={24} md={12}>
                    <Input value={data.biodiversity} onChange={(e) => setData({ ...data, biodiversity: e.target.value })} size="large" placeholder='Biodiversity' />
                </Col>
                <Col xs={24} md={24}>
                    <RangePicker value={data.date} onChange={(e) => setData({ ...data, date: e })} size="large" style={{ width: "100%" }} placeholder='Date' />
                </Col>
                <Col xs={24} md={24}>
                    <ButtonContainer>
                        <Create onClick={() => props.exportReports(data)}>Export CSV (.csv)</Create>
                    </ButtonContainer>
                </Col>
            </Row>

        </CustomModal >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        exportReports: (filters) => dispatch(exportReports(filters)),
        fetchSiteCountriesSelector: (filters) => dispatch(fetchSiteCountriesSelector(filters)),
        fetchSiteLmesSelector: (filters) => dispatch(fetchSiteLmesSelector(filters)),
        fetchSitesSelector: (filters) => dispatch(fetchSitesSelector(filters)),
        fetchSiteRegionsSelector: (filters) => dispatch(fetchSiteRegionsSelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.current,
        countries: state.siteCountry.selector,
        lmes: state.siteLme.selector,
        regions: state.siteRegion.selector,
        sites: state.site.selector
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportContainer);