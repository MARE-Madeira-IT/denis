import React from 'react'
import Navbar from '../Navbar'
import styled from 'styled-components';
import { Tag, Table, Space } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
];

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
    align-items: center;
    margin-bottom: 50px;

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
            width: 330px;
            height: 330px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 330px;
                
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

const Button = styled.div`
    padding: 10px 25px;
    font-weight: 700;
    border-radius: 16px;  
`;

const Role = styled(Button)`
    color: #002548;;
    border: 2px solid #002548;
    margin-right: 10px;
`;

const Edit = styled(Button)`
    background-color: #002548;
    color: white;
    border: 2px solid #002548;
    cursor: pointer;
`;

const ProfileField = ({ label, value }) => (
    <div className='profile-field'>
        <p className='value'>{value}</p>
        <p className='label'>{label} <br /> reports</p>
    </div>
)
function Homepage() {
    return (
        <div>
            <Container>

                <SectionContainer>
                    <Section>
                        <div className='image-container'>
                            <img src="/placeholder.webp" alt="profile " />
                        </div>
                        <div className='information-container'>
                            <Welcome>
                                <div className='flex'>
                                    <h2>Carla Fernandes</h2>
                                    <p>Madeira, Portugal</p>
                                </div>
                                <div className='flex button-container'>
                                    <Role>Validator</Role>
                                    <Edit>Edit Profile</Edit>
                                </div>
                            </Welcome>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum est quibusdam iusto nulla cumque maiores, alias quasi, sit veniam expedita accusamus, possimus eveniet similique ipsum molestiae in maxime. Dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus magni, perspiciatis, itaque earum excepturi, veritatis doloremque inventore facilis nemo ullam maiores perferendis quasi porro fugiat voluptas reprehenderit harum eum.</p>


                            <div className='field-container'>
                                <ProfileField label="accepted" value={14} />
                                <ProfileField label="pending" value={2} />
                                <ProfileField label="rejected" value={2} />
                            </div>
                        </div>

                    </Section>
                    <Section>
                        <div>
                            <h2>Your Reports</h2>
                            <Table columns={columns} dataSource={data} />
                        </div>
                    </Section>
                </SectionContainer>

            </Container>

        </div>
    )
}

export default Homepage