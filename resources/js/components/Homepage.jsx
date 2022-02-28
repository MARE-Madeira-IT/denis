import React from 'react'
import styled from 'styled-components';
import About from './Homepage/About';
import Partners from './Homepage/Partners';
import Timeline from './Homepage/Timeline';
import Navbar from './Navbar';

const Container = styled.div`
    scroll-behavior: smooth;
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
                <Partners />
                <Timeline />
            </Content>
        </Container>
    )
}

export default Homepage