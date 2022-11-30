import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import { Link } from 'react-router-dom';
import { dimensions } from '../Dashboard/dashboardHelper';

const StyledContent = styled(Content)`
    h2 {
        font-size: 40px;
        margin: 50px 0px;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        line-height: 94%;
        text-align: left;
    }
    
    p, li {
        font-weight: lighter;
    }
    
`;

const TutorialContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

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
            font-size: 16px;
            margin-top: 10px;
        }
    }

    @media (max-width: ${dimensions.sm}) {
        justify-content: flex-start;

        div {
            width: 50%;
        }
        
    }
    
`;

const UsersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    p {
        width: 50%;
        padding: 10px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            width: 100%;
            
        }
    }
    
`;

const ProtocolContainer = styled.div`
    display: flex;

    ul {
        @media (max-width: ${dimensions.md}) {
            padding-left: 10px;
        }
    }

    .column {
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
        margin-top: -10px;
        width: 25px;
    }
    
`;

function About() {
    const scrollParameters = handleScroll("aboutContainer");

    return (
        <Container id="aboutContainer">
            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/1.jpg" alt="" />
            </Title>
            <StyledContent>
                <div className="content-width">
                    <h2>About us</h2>
                    <p>
                        Marine debris is considered among the major threats to marine life, biodiversity, and ecosystems and causes particular concern due to its abundance, durability, and persistence in the marine environment. Moreover, marine debris contributes to the transfer of Non-Indigenous Species - NIS, acting as a vector for both first introductions in a new region and secondary spread within an already affected region.

                    </p>
                    <p>Opportunistic sampling methodologies provide an extensive range of information from all around the world, allowing increasing knowledge and filling the gaps in data.</p>
                    {false && <ul>
                        <li> Transparency of data publicly available on the platform</li>
                        <li> Historical information in dynamic views</li>
                        <li> Credibility from experts validation</li>
                    </ul>}

                    <MapLink to="/map">
                        <p>Check The Lastest Reports</p>
                        <img src="/images/about/map-link.svg" alt="" />
                    </MapLink>

                    <h2>How it works</h2>
                    <TutorialContainer>
                        <div>
                            <img src="/images/about/observation.svg" alt="" />
                            <p>Follow the protocol</p>
                        </div>
                        <div>
                            <img src="/images/about/add.svg" alt="" />
                            <p>Insert into the database</p>
                        </div>
                        <div>
                            <img src="/images/about/visualize.svg" alt="" />
                            <p>Visualize obervations</p>
                        </div>
                    </TutorialContainer>


                    <h2>Who is DeNIS for?</h2>
                    <UsersContainer>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        </p>
                    </UsersContainer>

                    <h2>Protocol for opportunistic sampling</h2>

                    <h3>Materials</h3>
                    <ProtocolContainer>
                        <div className='column'>
                            <ul>
                                <li>GPS</li>
                                <li>Camera</li>
                                <li>Annotation Material (paper / pencil)</li>

                            </ul>
                        </div>
                        <div className='column'>
                            <ul>
                                <li>Microscope (Optional)</li>
                                <li>PC with internet</li>
                                <li>Scale (Optional)</li>
                            </ul>

                        </div>
                    </ProtocolContainer>
                    <p>Once detected an object in the sea (seafloor or floating) or its proximity (beaches), record the date and the location where the object was detected, record its GPS position (during a dive, collect the GPS of the diving spot and the depth (in meters) where the object was found), take a picture, and collect it for further analysis.</p>

                    <p>Each item will be analyzed, particularly the following parameters should be recorded:</p>
                    <ProtocolContainer>
                        <div className='column'>
                            <ul>
                                <li>Debris type</li>
                                <li>Habitat of the findings</li>
                                <li>Debris material</li>
                                <li>Debris size and weight</li>

                            </ul>
                        </div>
                        <div className='column'>
                            <ul>
                                <li>Debris characteristics</li>
                                <li>Categories of debris item</li>
                                <li>Identification marks</li>
                            </ul>

                        </div>
                    </ProtocolContainer>

                    <p>All sessile and mobile macroalgae and macroinvertebrates colonizing litter items should be identified to the lowest possible taxonomic group, using the microscope if necessary. Indicate the abundance of each species (number or percent cover), their Viability (alive or dead) and their Maturity stage (e.g. Egg, Larvae, Juvenile, Mature).</p>



                </div >
            </StyledContent >
        </Container >
    )
}

export default About