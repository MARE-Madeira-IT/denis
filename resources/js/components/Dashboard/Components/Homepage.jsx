import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components';
import { fetchSelfReports, fetchReport } from "../../../redux/report/actions";
import TableContainer from "./TableContainer";
import { setDrawerState } from "../../../redux/drawer/actions";
import UserForm from './UserForm';
import Tour from '../Hooks/Tour';
import { dimensions } from '../dashboardHelper';
import PageHeader from '../Common/PageHeader';
import MapView from '../../MapView';

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 100px 100px 50px 100px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.maxWidth}) {
        padding: 50px 50px 0px 50px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 0px 20px;
    }

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

   h2 {
    font-size: 36px;
    margin-bottom: 50px;
   }
`;

const SectionContainer = styled.div`
    width: 100%;
    gap: 50px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
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
    @media (max-width: ${dimensions.md}) {
        width: 100%;

        .image-container{ 
            width: 60%;
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

const Button = styled.button`
    padding: 6px 50px;
    border-radius: 6px;  
    font-size: 16px;
`;

const Role = styled(Button)`
    background-color: transparent;
    border: 2px solid white;
    margin-right: 10px;
    text-transform: capitalize;
    border: 2px solid white;
    color:white;
`;

const Edit = styled(Button)`
    color: white;
    margin-top: 20px;
    background-color: #0C4C88;
    border: 2px solid #0C4C88;
    cursor: pointer;
`;

const Parameters = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    font-size: 16px;

    div {
        width: 50%;
        margin: 10px 0px;        
    }

    span {
        margin-bottom: 10px;
    }

    p {
        opacity: .7;
        margin: 0px;
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 14px;

        div {
            width: 33%;
        }
        
    }

    @media (max-width: ${dimensions.sm}) {
        div {
            width: 100%;
        }
        
    }
`;

const ProfileField = ({ label, value }) => (
    <div className='profile-field'>
        <p className='value'>{value}</p>
        <p className='label'>{label} <br /> reports</p>
    </div>
)
function Homepage({ fetchSelfReports,
    fetchReport,
    setDrawerState, data, loading, meta, current, user }) {
    const [filters, setFilters] = useState({});
    const [activeForm, setFormModal] = useState(false)
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
            <PageHeader link={false} title="Welcome to your dashboard" subtitle="Here you can track your reports and find all suitable information you need about marine Debris and Non-Indigenous Species" />
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
                                <div className='flex button-container'>
                                    {user.id && Object.entries(user?.roles).map((value) => (
                                        <span key={value[0]}>
                                            {value[1] && <Role>{value[0]}</Role>}
                                        </ span>
                                    ))}

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
                            <Edit data-intro="You can edit it here!" data-title="Edit the profile" data-step='2' onClick={() => setVisible(true)}>Edit profile</Edit>
                            {/* <div className='field-container'>
                                <ProfileField label="approved" value={user.metrics?.approved} />
                                <ProfileField label="pending" value={user.metrics?.pending} />
                                <ProfileField label="rejected" value={user.metrics?.rejected} />
                            </div> */}
                        </div>

                    </Section>
                    <DataSection data-intro="Reports you've submitted will be visible here" data-title="Your reports" data-step='3' >
                        <div>
                            <h2 id="selector3">Your Reports</h2>
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