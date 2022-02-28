import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import { Link } from 'react-router-dom';

const StyledContent = styled(Content)`
    h2 {
        font-weight: 400;
        font-size: 40px;
        margin: 40px 0px;
    }
    
    p, li {
        font-weight: lighter;
    }
    
`;

const TutorialContainer = styled.div`
    display: flex;
    justify-content: space-around;

    div {
        width: 33%;
        padding: 10px;
        box-sizing: border-box;

        img {
            width: 60%;
            margin: auto;
            display: block;
        }

        p {
            text-align: center;
            font-size: 18px;
        }
    }
    
`;

const UsersContainer = styled.div`
    display: flex;

    p {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;
    }
    
`;

const MapLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-decoration: none;
    
    p {
        font-weight: 900;
        color: black;
    }

    img {
        margin-top: 5px;
        width: 25px;
    }
    
`;

function About() {
    const scrollParameters = handleScroll("about-container", "about");

    return (
        <Container id="about-container">
            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/1.jpg" alt="" />
            </Title>
            <StyledContent>
                <div className="content-width">
                    <h2>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                    </p>
                    <ul>
                        <li> Transparency of data publicly available on the platform</li>
                        <li> Historical information in dynamic views</li>
                        <li> Credibility from experts validation</li>
                    </ul>
                    <MapLink to="/map">
                        <p>Check The Lastest Reports</p>
                        <img src="/images/about/map-link.svg" alt="" />
                    </MapLink>

                    <h2>How it Works</h2>
                    <TutorialContainer>
                        <div>
                            <img src="/images/about/observation.svg" alt="" />
                            <p>Collect your observations</p>
                        </div>
                        <div>
                            <img src="/images/about/add.svg" alt="" />
                            <p>Insert into the database</p>
                        </div>
                        <div>
                            <img src="/images/about/visualize.svg" alt="" />
                            <p>Visualize obervations around the Atlantic</p>
                        </div>
                    </TutorialContainer>


                    <h2>Who Is LOREM For?</h2>
                    <UsersContainer>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        </p>
                    </UsersContainer>

                    <h2>Community</h2>
                    <div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!</p>
                    </div>
                    <div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!</p>
                    </div>


                </div >
            </StyledContent >
        </Container >
    )
}

export default About