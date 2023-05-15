import React from 'react'
import styled from 'styled-components';
import About from './Homepage/About';
import Partners from './Homepage/Partners';
import Timeline from './Homepage/Timeline';
import Faq from './Homepage/Faq';
import Navbar from './Navbar';

const Container = styled.div`
    scroll-behavior: smooth;
    width: 100%;
    min-height: 100vh;
    overflow: visible;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 24px;
`;

const Content = styled.div`
    z-index: 2;
`;

function Homepage() {
    return (
        <Container>
            <Navbar />
            <Content>
                <About />
                <Faq />
                <Partners />
                <Timeline />
            </Content>
        </Container>
    )
}

export default Homepage