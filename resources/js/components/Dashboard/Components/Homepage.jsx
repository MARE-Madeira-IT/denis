import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components';
import { fetchSelfReports, fetchReport } from "../../../redux/report/actions";
import TableContainer from "./TableContainer";
import { setDrawerState } from "../../../redux/drawer/actions";
import UserForm from './UserForm';


const Container = styled.div`
    width: 100%;
    overflow: visible;
    box-sizing: border-box;
    color: #000;
    padding: 48px;
    box-sizing: border-box;
`;

const Welcome = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    .button-container{
        display: flex;
    }

    .flex {
        h2 {
            margin-bottom: 0px;
            font-size: 28px;
            font-weight: 900;
        }

        p {
            font-size: 16px;
            margin-top: 0px;
        }
    }

    
`;

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 100px;

        .image-container{
            width: 300px;

            img {
                width: 100%;
                max-height: 100%;
                object-fit: cover;
                
            }
        }

        .information-container{
            width: 70%;
            padding: 0px 30px;
            box-sizing: border-box;
            position: relative;
            

            .name, .label, .value {
                margin: 0px;
            }

            .name {
                margin-bottom: 10px;
                font-weight: bold;
            }
            

            .field-container {
                display: flex;
                flex-wrap: wrap;
                margin-top: 50px;

                .profile-field {
                    display: flex;
                    align-items: center;
                    padding-right: 30px;
                    box-sizing: border-box;

                    .label {
                        opacity: .6;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 18px;
                    }

                    .value {
                        font-size: 42px;
                        margin-right: 5px;
                        line-height: 63px;
                        font-weight: 700;
                        opacity: .6;
                    }
                }
            }
            
            
        
    }
`;

const Button = styled.button`
    padding: 6px 13px;
    font-weight: 700;
    border-radius: 6px;  
`;

const Role = styled(Button)`
    color: #002548;;
    border: 2px solid #002548;
    margin-right: 10px;
    text-transform: capitalize;
    background-color: white;
`;

const Edit = styled(Button)`
    background-color: #002548;
    color: white;
    border: 2px solid #002548;
    cursor: pointer;
`;

const Parameters = styled.div`
    span {
        opacity: .7;
        margin-bottom: 20px;
    }

    p {
        margin: 0px;
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
        <div>
            <Container>
                <UserForm visible={visible} setVisible={setVisible} user={user} />
                <SectionContainer>
                    {user.id && <Section>
                        <div className='image-container'>
                            <img src={user.image} alt="profile " />
                        </div>
                        <div className='information-container'>
                            <Welcome>
                                <div className='flex'>
                                    <h2>{user.name}</h2>
                                    <p>{user.country}</p>
                                    {Object.entries(user.roles).map((value) => (
                                        <span key={value[0]}>
                                            {value[1] && <Role>{value[0]}</Role>}
                                        </ span>
                                    ))}
                                </div>
                                <div className='flex button-container'>

                                    <Edit onClick={() => setVisible(true)}>Edit</Edit>
                                </div>
                            </Welcome>
                            <Parameters>
                                <p>{user.email}</p>
                                <span>Email</span>
                                <p>{user.phone}</p>
                                <span>{user.phone ? "Phone" : ""}</span>
                                <p>{user.institution}</p>
                                <span>Institution</span>
                            </Parameters>

                            <div className='field-container'>
                                <ProfileField label="approved" value={user.metrics?.approved} />
                                <ProfileField label="pending" value={user.metrics?.pending} />
                                <ProfileField label="rejected" value={user.metrics?.rejected} />
                            </div>
                        </div>

                    </Section>}
                    <Section>
                        <div>
                            <h2>Your Reports</h2>
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
                    </Section>
                </SectionContainer>

            </Container>

        </div>
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