import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import VideoContainer from './VideoContainer';

const TimelineContainer = styled.div`
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
        margin: 0px 0px 50px 0px;
    }

`;

const TimelineItem = styled.div`
    padding: 30px;
    box-sizing: border-box;
	position: relative;
	color: black;
	border-left: 2px solid rgba(0,0,0, .3);
    
	p {
		font-size: 16px;
	}

	&::after {
		width: 10px;
		height: 10px;
		display: block;
		top: 1em;
		position: absolute;
		left: -7px;
		border-radius: 10px;
		content: '';
		border: 2px solid rgba(0,0,0, .3);
		background: white;
	}

	&:last-child {
		border-image: linear-gradient(
			to bottom,
			rgba(0,0,0, .3),
			rgba(0,0,0, 0)) 1 100%
		;
	}
`;


function Timeline() {
    const scrollParameters = handleScroll("timelineContainer", "timeline");

    return (
        <Container id="timelineContainer" >
            <Title >
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/3.jpg" alt="" />
            </Title>
            <Content>

                <div className="content-width">
                    <TimelineContainer>
                        <h2>Timeline</h2>
                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid id deserunt earum libero, molestias, facilis assumenda eveniet a accusantium, delectus nobis iure aspernatur autem cum enim aut voluptates recusandae!
                        </p> */}


                        <TimelineItem >
                            <h3>February, 2022</h3>
                            <p>
                                Marine debris & Non-Indigenous Species (NIS) data spreadsheet
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>April, 2022</h3>
                            <p>
                                Initial design concepts and strategy definitions
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>June, 2022</h3>
                            <p>
                                Database architecture and back-office structure
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>August, 2022</h3>
                            <p>
                                Design concepts, usability reviews, and consistency evaluation
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>October, 2022</h3>
                            <p>
                                Back-office and user interface integration
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>December, 2022</h3>
                            <p>
                                Staging QA, Release validation, and platform launch
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>January, 2023</h3>
                            <p>
                                User studies and feedback collection
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>March, 2023</h3>
                            <p>
                                System refactor and quality of data validations
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>May, 2023</h3>
                            <p>
                                Worldwide release
                            </p>
                        </TimelineItem>


                    </TimelineContainer>
                </div>
            </Content>
        </Container>
    )
}

export default Timeline