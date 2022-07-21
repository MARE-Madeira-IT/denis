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

    h2 {
        margin-bottom: 0px;
        font-size: 28px;
        font-weight: 900;
    }

    p {
        font-size: 16px;
        color: #000000;
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
                    width: 50%;

                    .label {
                        opacity: .6;
                        margin-top: 15px;
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

                <SectionContainer>
                    <Section>
                        <div className='image-container'>
                            <img src="/placeholder.webp" alt="profile " />
                        </div>
                        <div className='information-container'>
                            <Welcome>
                                <h2>Carla Fernandes</h2>
                                <p>Madeira, Portugal</p>
                            </Welcome>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum est quibusdam iusto nulla cumque maiores, alias quasi, sit veniam expedita accusamus, possimus eveniet similique ipsum molestiae in maxime. Dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus magni, perspiciatis, itaque earum excepturi, veritatis doloremque inventore facilis nemo ullam maiores perferendis quasi porro fugiat voluptas reprehenderit harum eum.</p>
                            <Role color="blue">Validator</Role>

                            <div className='field-container'>
                                <ProfileField label="Accepted Reports" value={12} />
                                <ProfileField label="Pending Validation" value={2} />
                                <ProfileField label="Discord" value="Lorem&#35;0000" />
                                <ProfileField label="Email" value="lorem@lorem.com" />
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