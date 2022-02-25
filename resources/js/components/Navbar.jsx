import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
    z-index: 990;
    width: 50%;
    padding: 48px;
    text-transform: uppercase;
    color: white;

    h1 {
        font-size: 48px;
        margin-bottom: 10px;
    }

    p {
        margin-top: 0px;
        font-size: 18px;
    }
`;


function Navbar() {
    return (
        <Container>
            <h1>LOREM</h1>
            <p>Lorem ipsum dolor.</p>
        </Container>
    )
}

export default Navbar