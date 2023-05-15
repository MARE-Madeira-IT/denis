import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar'
import { maxWidth } from './dashboardHelper';
import PrivateRoute from './Common/PrivateRoute';
import { colors } from '../../helper';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    max-width: ${maxWidth};
    margin: auto;
    flex: 1;
    display: block;
    
`;

const Gradient = styled.div`
    width: 100vw;
    height: 50vh;
    position: absolute;
    z-index: -1;
    top: 0;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 25%, rgba(0,0,0,.15) 100%); 
`;

const Background = styled.div`
    background-color: ${colors.main};
    background-image: url("/images/dashboard_header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 50vh;
    position: absolute;
    z-index: -2;
    top: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

function DashboardLayout({ children, permissionLevel = 0, redirectPath = "/login" }) {
    return (
        <PrivateRoute treshold={permissionLevel} to={redirectPath}>
            <Container>
                <Navbar />

                <Content>{children}</Content>
                <Background />
                <Gradient />
            </Container>
        </PrivateRoute>
    )
}

export default DashboardLayout