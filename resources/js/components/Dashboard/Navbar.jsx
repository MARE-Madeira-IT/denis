import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { maxWidth } from './dashboardHelper';
import { connect } from "react-redux";

const navbarItems = [
    { to: "/dashboard/", title: "Profile", treshold: 0 },
    { to: "/dashboard/reports", title: "Reports", treshold: 0 },
    { to: "/dashboard/users", title: "Users", treshold: 2 },
    { to: "/dashboard/debris", title: "Debris", treshold: 0 },
    { to: "/dashboard/ecosystems", title: "Ecosystems", treshold: 0 },
];

const Container = styled.div`
    width: 100%;
    background-color: #0C4C88;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    padding: 10px 0px;
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    padding: 10px 50px 10px 0px;
    box-sizing: border-box;

    h1 {
        width: 100%;
        box-sizing: border-box;
        margin:0px;
        font-size: 64px;
        color: white;
        font-weight: 900;
        line-height: 64px;
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0.041em;
    }

    h2 {
        font-family: 'Lato', sans-serif;
        margin:0px;
        font-weight: 300;
        color: white;
        letter-spacing: -0.04em;
        font-size: 18px;
        line-height: 18px;
    }
`;

const PagesContainer = styled.div`
    margin: auto;
    padding: 0px;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;

    .link--active{
        span {
            font-weight: bold;
        }
        
    }
    
`;

const PageContainer = styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    color: white;

    span {
        margin: 0px 20px;
        transition: all .3s ease;
    }

    &:hover {
        color: white;

        span {
            font-weight: bold;
        }
        
    }
`;


function Navbar({ permissionLevel }) {
    return (
        <Container>
            <Content>
                <Title>
                    <h1>Database</h1>
                    <h2>MARINE DEBRIS & NON-INDIGENOUS SPECIES</h2>
                </Title>
                <PagesContainer>
                    {navbarItems.map((item, index) => (
                        <>
                            {permissionLevel >= item.treshold &&
                                <PageContainer
                                    className={({ isActive }) => isActive ? "link--active" : undefined}
                                    key={index}
                                    to={item.to}>
                                    <span>{item.title}</span>
                                </PageContainer>}
                        </>
                    ))}
                </PagesContainer>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
    };
};

export default connect(mapStateToProps, null)(Navbar);
