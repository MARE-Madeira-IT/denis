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
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    
    margin: auto;
    flex: 1;
    display: block;
    
`;


const Background = styled.div`
    background-color: #0C4C88;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='720' preserveAspectRatio='none' viewBox='0 0 1920 720'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1623%26quot%3b)' fill='none'%3e%3crect width='1920' height='720' x='0' y='0' fill='url(%23SvgjsLinearGradient1624)'%3e%3c/rect%3e%3cpath d='M442.79 837.91C655.08 763.19 684.61 153.5 1003.75 133.85 1322.88 114.2 1284.22 223.85 1564.7 223.85 1845.18 223.85 1983.63 134.14 2125.66 133.85' stroke='rgba(255%2c 255%2c 255%2c 0.21)' stroke-width='2'%3e%3c/path%3e%3cpath d='M241.09 772.35C428.5 740.15 512.85 283.47 818.91 277.68 1124.96 271.89 1107.82 367.68 1396.72 367.68 1685.63 367.68 1828.34 277.95 1974.54 277.68' stroke='rgba(255%2c 255%2c 255%2c 0.21)' stroke-width='2'%3e%3c/path%3e%3cpath d='M346.3 723.5C505.2 720.67 645.59 517.58 947.68 517.45 1249.77 517.32 1248.37 607.45 1549.06 607.45 1849.75 607.45 1998.42 517.7 2150.44 517.45' stroke='rgba(255%2c 255%2c 255%2c 0.21)' stroke-width='2'%3e%3c/path%3e%3cpath d='M669.21 753.76C900.01 730.96 1049.79 240.54 1441.41 239.61 1833.04 238.68 2010.57 488.45 2213.62 491.61' stroke='rgba(255%2c 255%2c 255%2c 0.21)' stroke-width='2'%3e%3c/path%3e%3cpath d='M945.65 854.93C1139.03 837.75 1233.5 456.97 1600.8 437.99 1968.1 419.01 2080.52 190.29 2255.95 185.99' stroke='rgba(255%2c 255%2c 255%2c 0.21)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1623'%3e%3crect width='1920' height='720' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.62%25' y1='-41.67%25' x2='84.38%25' y2='141.67%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1624'%3e%3cstop stop-color='rgba(15%2c 59%2c 105%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(12%2c 76%2c 136%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
            </Container>
        </PrivateRoute>
    )
}

export default DashboardLayout