import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    
`;

const LogoContainer = styled.h1`
    text-align: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 28px;
`;

const PagesContainer = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-top: 1px solid #dddddd;
    display: flex;
    justify-content: space-around;
    
`;

const PageContainer = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    color: black;
`;

function Navbar() {
    return (
        <Container>
            <LogoContainer>Navbar</LogoContainer>
            <PagesContainer>
                <PageContainer to="/dashboard">Dashboard</PageContainer>
                <PageContainer to="/reports">Reports</PageContainer>
                <PageContainer to="/validation">Validation</PageContainer>
            </PagesContainer>
        </Container>
    )
}

export default Navbar
