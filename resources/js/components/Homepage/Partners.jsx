import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";

const StyledContent = styled(Content)`
    h2 {
        font-weight: 400;
        font-size: 40px;
        margin: 40px 0px;
        text-align:center;
    }
    
    p {
        font-weight: lighter;
        width: 80%;
        margin: auto;
        text-align: center;
    }
    
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0px;
    flex-wrap: wrap;
    
    div {
        width: 33%;
        padding: 20px;
        box-sizing: border-box;

        img {
            width: 100%;
        }
    }
`;

function Partners() {
    const scrollParameters = handleScroll("partner-container", "partners");

    return (
        <Container id="partner-container">
            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/2.jpg" alt="" />
            </Title>
            <StyledContent>
                <div className="content-width">
                    <h2>Our Partners & Supporters</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!</p>

                    <Flex>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                        <div><img src="/images/partners/logo.png" alt="" /></div>
                    </Flex>

                    <p> Want to help? Contact us and we'll work together!</p>
                </div>
            </StyledContent>
        </Container>
    )
}

export default Partners