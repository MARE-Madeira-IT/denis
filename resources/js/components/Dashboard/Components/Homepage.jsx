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
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
    {
        key: '8',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: 'London No. 1 Lake Park'
    },
];

const Container = styled.div`
    width: 100%;
    overflow: visible;
    background: #ffffff;
    box-sizing: border-box;
    color: #000;
    padding: 48px;
    box-sizing: border-box;
`;

const Welcome = styled.div`
    width: 100%;

    h2 {
        margin-bottom: 0px;
        font-size: 28px;
        font-weight: 900;
    }

    p {
        font-size: 16px;
        color: #6b6b6b;
        margin-top: 0px;
        margin-bottom: 50px;
    }
`;

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Section = styled.div`
    width: ${props => props.width};
    
    box-sizing: border-box;
    
    &:nth-child(2){
        padding: 0px 30px;
    }

    .content {
        border-radius: 6px;
        border: 1px solid #d8d8d8;

        .image-container{
            width: 100%;
            height: 400px;
            position: relative;

            img {
                position: absolute;
                left: 0%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
            }
        }

        .information-container{
            padding: 20px;
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
                    width: 50%;

                    .label {
                        color: #777;
                        margin-top: 15px;
                    }
                }
            }
            
            
        }
    }
`;

const Role = styled(Tag)`
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 5px 10px;
    border-radius: 6px;
`;
const ProfileField = ({ label, value }) => (
    <div className='profile-field'>
        <p className='label'>{label}</p>
        <p className='value'>{value}</p>
    </div>
)
function Homepage() {
    return (
        <div>
            <Container>
                <Welcome>
                    <h2>Hello, Lorem!</h2>
                    <p>Welcome to lorem</p>
                </Welcome>
                <SectionContainer>
                    <Section width="30%">
                        <div className='content'>
                            <div className='image-container'>
                                <img src="/placeholder.webp" alt="profile " />
                            </div>
                            <div className='information-container'>
                                <h3 className='name'>Lorem lorem</h3>
                                <Role color="magenta">Expert</Role>

                                <div className='field-container'>
                                    <ProfileField label="Accepted Reports" value={12} />
                                    <ProfileField label="Pending Validation" value={2} />
                                    <ProfileField label="Discord" value="Lorem&#35;0000" />
                                    <ProfileField label="Email" value="lorem@lorem.com" />
                                </div>
                            </div>

                        </div>

                    </Section>
                    <Section width="70%">
                        <h2>Your Reports</h2>
                        <Table columns={columns} dataSource={data} />

                    </Section>
                </SectionContainer>

            </Container>

        </div>
    )
}

export default Homepage