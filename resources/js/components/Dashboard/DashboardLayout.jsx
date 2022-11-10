import React from 'react'
import styled from 'styled-components';
import Homepage from './Components/Homepage';
import Navbar from './Navbar'
import { maxWidth } from './dashboardHelper';
import PrivateRoute from './Common/PrivateRoute';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Lato';
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1270px;
    margin: auto;
    flex: 1;
    display: block;
`;



function DashboardLayout({ children, permissionLevel = 0, redirectPath = "/login" }) {
    return (
        <PrivateRoute treshold={permissionLevel} to={redirectPath}>
            <Container>
                <Navbar />
                <Content>{children}</Content>

            </Container>
        </PrivateRoute>
    )
}

export default DashboardLayout