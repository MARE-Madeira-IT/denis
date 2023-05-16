import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import { Link } from 'react-router-dom';
import { dimensions } from '../Dashboard/dashboardHelper';
import MapView from '../MapView';
import { connect } from 'react-redux';
import { fetchReportsCoordinates } from '../../redux/report/actions';

const scroll = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;


const StyledContent = styled(Content)`
    h2 {
        margin-top: 30px;
        margin-bottom: 12px;
        font-size: 32px;
        line-height: 40px;
        font-weight: 400;
        text-align: left;
    }
    
    p, li {
        font-weight: 200;
        font-size: 16px;
    }
    
`;



const MapContainer = styled.div`
    width: 100%;    
    margin-top: 30px;
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

const Scroll = styled.img`
    height: 30px;
    position: absolute;
    left: 50%;
    top: calc(50vh - 40px);
    z-index: 999;
    transform: translate(-50%, 0%);
    animation: ${scroll} 3s ease infinite ;
    
    @media (min-width: ${dimensions.md}) {
        display: none;  
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

function About({ fetchReportsCoordinates }) {
    const scrollParameters = handleScroll("aboutContainer");

    useEffect(() => {
        fetchReportsCoordinates();
    }, [])

    return (
        <Container id="aboutContainer">


            <Scroll src="/images/icons/scroll.svg" alt="scroll" />

            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/1.jpg" alt="" />

            </Title>
            <StyledContent>
                <div className="content-width">
                    {/* <p>Impedit officia velit nihil debitis commodi. Itaque natus laudantium. Laudantium sed quasi ut non fugiat. Atque impedit est voluptatem sit qui.</p> */}
                    <h2>Global Database on Marine Debris and Non-Indigenous Species</h2>
                    <p>
                        Marine debris is considered among the major threats to marine life, biodiversity, and ecosystems and causes particular concern due to its abundance, durability, and persistence in the marine environment. Moreover, marine debris contributes to the transfer of Non-Indigenous Species - NIS, acting as a vector for both first introductions in a new region and secondary spread within an already affected region.

                    </p>
                    <p>Opportunistic sampling methodologies provide an extensive range of information from all around the world, allowing increasing knowledge and filling the gaps in data.</p>
                    {false && <ul>
                        <li> Transparency of data publicly available on the platform</li>
                        <li> Historical information in dynamic views</li>
                        <li> Credibility from experts validation</li>
                    </ul>}

                    <MapContainer>
                        <MapView />
                    </MapContainer>

                    <MapLink to="/map">
                        <p>Check More Reports</p>
                        <img src="/images/about/map-link.svg" alt="" />
                    </MapLink>




                    <h2>Who is DeNIS for?</h2>
                    <UsersContainer>
                        <p>
                            DeNIS is designed to serve as a one-stop-shop for researchers, policymakers, and other stakeholders in the scientific community. The platform provides comprehensive information on marine debris and non-indigenous species, including their distribution, origin, and impact on marine ecosystems.
                        </p>
                        <p>
                            We also offer various tools and resources such as data visualization tools, data analytics tools, and interactive maps to facilitate research and collaboration. By providing access to this information, we hope to foster collaboration and promote the development of solutions that address pressing issues.
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

                    
                    <h2>Data usage</h2>
                    <p>If any data taken from DeNIS is used for scientific outputs it should be cited as <b>João Canning-Clode, Rúben Freitas, Peter Barry, et al. Introducing 'DeNIS': a global database on anthropogenic marine Debris and Non-Indigenous Species. Authorea. May 11, 2023.</b></p>

                </div >
            </StyledContent >
        </Container >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReportsCoordinates: () => dispatch(fetchReportsCoordinates()),
    };
};

export default connect(null, mapDispatchToProps)(About);