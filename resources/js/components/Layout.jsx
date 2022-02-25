import React from 'react'
import styled from 'styled-components';


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


function Layout({ children }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout