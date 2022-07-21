import React from 'react'
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Navbar from './Navbar'
import { maxWidth } from './dashboardHelper';

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



function DashboardLayout({ children }) {
    return (
        <Container>
            <Navbar />
            <Content>{children}</Content>

        </Container>
    )
}

export default DashboardLayout