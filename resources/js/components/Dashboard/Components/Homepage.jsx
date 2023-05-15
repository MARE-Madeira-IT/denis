import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components';
import { fetchSelfReports, fetchReport } from "../../../redux/report/actions";
import TableContainer from "./TableContainer";
import { setDrawerState } from "../../../redux/drawer/actions";
import UserForm from './UserForm';
import Tour from '../Hooks/Tour';
import { Create, dimensions, maxWidthStyle } from '../dashboardHelper';
import PageHeader from '../Common/PageHeader';
import MapView from '../../MapView';
import Drawer from './Report/Drawer';
import { Row } from 'antd';
import { Link } from 'react-router-dom';
import CollectionTableContainer from './CollectionTableContainer';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    ${maxWidthStyle}

`;

const Welcome = styled.div`
    width: 100%;
    margin: 20px 0px 0px 0px;

    h2 {
        margin-bottom: 0px;
        font-size: 26px;
        color: black;
    }

    p {
        font-size: 16px;
        opacity: .7;
    }  
`;

const DataSection = styled.div`
    flex: 1;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    .ant-row {
        margin-bottom: 30px;
    }

    h2 {
        font-size: 36px;
    }
`;

const SectionContainer = styled.div`
    width: 100%;
    gap: 50px;
    display: flex;

    @media (max-width: ${dimensions.xl}) {
        flex-wrap: wrap;
        margin-top: 30px;
    }
`;

const Section = styled.div`
    display: block;

    .image-container{
        width: 100%;
        max-width: 350px;

        img {
            width: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: 12px;
        }
    }

    .information-container{
        flex: 1;
        box-sizing: border-box;
        color: black;
        max-width: 350px;           

        .name, .label, .value {
            margin: 0px;
        }

        .name {
            margin-bottom: 20px;
            font-weight: bold;

        }       
        
    
    }
    @media (max-width: ${dimensions.xl}) {
        width: 100%;
        display: flex;
        gap: 50px;

        .image-container{ 
            width: 30%;
            max-width: 3050px;

            img {
                height: 100%;
            }
        }

        .information-container {
            width: 70%;
            max-width: 1500px;  
        }
    }

    @media (max-width: ${dimensions.md}) {
        display: block;

        .image-container { 
            width: 100%;
            margin: auto;
            display: block;
            margin-bottom: 30px;
            max-width: 1000px;
        }

        .information-container {
            width: 100%;
            padding: 0px;
            max-width: 1000px;
        }
    }

    @media (max-width: ${dimensions.sm}) {

        .image-container { 
            width: 100%;
        }

    }

`;


const Parameters = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 16px;

    div {
        width: 100%;
        margin: 0px;        
    }

    span {
        margin-bottom: 10px;
    }

    p {
        opacity: .7;
        margin: 0px;
    }

    @media (max-width: ${dimensions.xl}) {
        div {
            width: 33%;
        }
        
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 14px;        
    }

    @media (max-width: ${dimensions.sm}) {
        div {
            width: 100%;
        }
        
    }
`;

function Homepage({ fetchSelfReports,
    fetchReport,
    setDrawerState, data, loading, meta, user }) {
    const [filters, setFilters] = useState({});
    const [visible, setVisible] = useState(false)

    function handlePageChange(pagination) {
        fetchSelfReports(pagination.current, filters);
    }

    function handleRowClick(row) {
        fetchReport(row.id).then((response) => {
            setDrawerState(1, response.action.payload.data.data);
        })
    }




    useEffect(() => {
        if (!loading) {
            fetchSelfReports(1, filters);
        }


    }, [filters])

    return (
        <Tour updateCriteria={[user]} itemName="profileTour" >
            <Drawer />
            <PageHeader link={false} title="Welcome to your dashboard" subtitle="Track your reports and find all information you need about marine Debris and Non-Indigenous Species" />
            <Container>
                <UserForm visible={visible} setVisible={setVisible} user={user} />

                <SectionContainer >
                    <Section data-intro="This is your profile!" data-title="Welcome!" data-step='1' >
                        <div className='image-container'>
                            <img src={user?.image} alt="profile " />
                        </div>
                        <div className='information-container' >
                            <Welcome>
                                <div className='flex'>
                                    <h2>{user?.name}</h2>
                                    <p>{user?.country}</p>
                                </div>
                            </Welcome>
                            <Parameters>
                                <div>
                                    <span>Email</span>
                                    <p>{user?.email}</p>
                                </div>
                                <div>
                                    <span>{user?.phone ? "Phone" : ""}</span>
                                    <p>{user?.phone}</p>
                                </div>
                                <div>
                                    <span>Institution</span>
                                    <p>{user?.institution}</p>
                                </div>
                            </Parameters>
                            <Create style={{ marginTop: "20px" }} data-intro="You can edit it here!" data-title="Edit the profile" data-step='2' onClick={() => setVisible(true)}>Edit profile</Create>
                            {/* <div className='field-container'>
                                <ProfileField label="approved" value={user.metrics?.approved} />
                                <ProfileField label="pending" value={user.metrics?.pending} />
                                <ProfileField label="rejected" value={user.metrics?.rejected} />
                            </div> */}
                        </div>

                    </Section>
                    <DataSection data-intro="Reports you've submitted will be visible here" data-title="Your reports" data-step='3' >


                        <div>
                            <Row type="flex" justify='space-between' align='middle'>
                                <h2 id="selector3">Your reports</h2>
                                <Link to="/dashboard/reports?create=1"><Create>Add a report to the database</Create></Link>

                            </Row>

                            <MapView customData={data} />
                            <TableContainer
                                handlePageChange={handlePageChange}
                                data={data}
                                loading={loading}
                                meta={meta}
                                handleRowClick={handleRowClick}
                                setFilters={setFilters}
                                filters={filters}
                            />
                        </div>
                        <br />
                        <div>
                            <Row type="flex" justify='space-between' align='middle'>
                                <h2 id="selector3">Your collections</h2>
                                <Link to="/dashboard/collections?create=1"><Create>Upload a collection</Create></Link>

                            </Row>

                            <CollectionTableContainer />

                        </div>
                    </DataSection>
                </SectionContainer>

            </Container>

        </Tour >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSelfReports: (page, filters) => dispatch(fetchSelfReports(page, filters)),
        fetchReport: (id) => dispatch(fetchReport(id)),
        setDrawerState: (state, object) => dispatch(setDrawerState(state, object)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.report.loading,
        data: state.report.selfData,
        user: state.auth.currentUser,
        meta: state.report.selfMeta,
        current: state.drawer.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);