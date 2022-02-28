import React from 'react'
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';
import Navbar from './Navbar'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: visible;
    background: #fff;
    box-sizing: border-box;
    color: #000;
    font-size: 18px;
    line-height: 24px;
`;


function DashboardLayout({ children }) {
    return (
        <Container>
            <Navbar />
            {children}
        </Container>
    )
}

export default DashboardLayout