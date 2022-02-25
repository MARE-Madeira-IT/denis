import React from 'react'
import styled from 'styled-components';
import About from './Homepage/About';
import Partners from './Homepage/Partners';
import Timeline from './Homepage/Timeline';
import Navbar from './Navbar';

const Container = styled.div`
    scroll-behavior: smooth;
`;

function Homepage() {
    return (
        <Container>
            <Navbar />
            <About />
            <Partners />
            <Timeline />
        </Container>
    )
}

export default Homepage