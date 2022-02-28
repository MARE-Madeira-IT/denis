import React from 'react'
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Homepage from './Components/Homepage';

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


function DashboardLayout() {
    return (
        <Container>
            <Routes>
                <Route path="/dashboard" element={<Homepage />} />
            </Routes>
        </Container>
    )
}

export default DashboardLayout