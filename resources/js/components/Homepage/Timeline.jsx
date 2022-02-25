import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";

const TimelineContainer = styled.div`
    max-width: 1024px;
	width: 90%;
	margin: 0 auto;
`;

const TimelineItem = styled.div`
    padding: 3em 2em 2em;
	position: relative;
	color: rgba(black, .7);
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
    const scrollParameters = handleScroll("timeline-container", "timeline");
    console.log(scrollParameters);
    return (
        <Container>
            <Title id="timeline-container">
                <div style={{ opacity: scrollParameters.opacity }}>
                    <h2>Timeline</h2>
                </div>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/3.jpg" alt="" />
            </Title>
            <Content>
                <div className="content-width">
                    <TimelineContainer>

                        <TimelineItem >
                            <h3>February, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>March, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>April, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>

                        <TimelineItem >
                            <h3>May, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>


                        <TimelineItem >
                            <h3>June, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>


                        <TimelineItem >
                            <h3>July, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>


                        <TimelineItem >
                            <h3>August, 2022</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi perspiciatis obcaecati totam ut! Eius nemo excepturi enim asperiores ut, quibusdam qui deleniti maiores non, optio et est possimus eveniet.
                            </p>
                        </TimelineItem>


                    </TimelineContainer>
                </div>
            </Content>
        </Container>
    )
}

export default Timeline