import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import { dimensions } from '../Dashboard/dashboardHelper';
import { Collapse } from 'antd';
import { colors } from '../../helper';
import VideoContainer from './VideoContainer';

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

const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 50px 0px;
    flex-wrap: wrap;
    
    div {
        width: 50%;
        padding: 40px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.lg}) {
            width: 80%;
            margin: auto;
        }

        @media (max-width: ${dimensions.md}) {
            width: 50%;
            padding: 10px;
        }

        img {
            width: 100%;
        }
    }
`;

const StyledCollapse = styled(Collapse)`

    margin-top: 30px;
    
    .ant-collapse-content {
        p {
            border-left: 2px solid ${colors.main};
            padding: 5px 0px 5px 20px;
            box-sizing: border-box;
        }
        
    }

    .ant-collapse-arrow {
        width: 15px;
        height: 15px;
    }

    .ant-collapse-item {
        padding: 15px 0px;
        box-sizing: border-box;
        border-bottom: 1px solid #e1e1e1;
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

const questions = [
    {
        question: "What is DeNIS",
        answer: "DeNIS (Debris and Non-Indigenous Species Information System) is a scientific website designed to serve as a one-stop-shop for researchers, policymakers, and stakeholders in the scientific community. It provides comprehensive information on marine debris and non-indigenous species, including their distribution, origin, and impact on marine ecosystems."
    },
    {
        question: "Who can benefit from DeNIS?",
        answer: "DeNIS is a valuable resource for researchers, policymakers, and other stakeholders interested in marine debris and non-indigenous species. It provides access to extensive data, tools for analysis and visualization, interactive maps, and promotes collaboration among the scientific community."
    },
    {
        question: "What information does DeNIS provide?",
        answer: "DeNIS offers comprehensive information on marine debris and non-indigenous species. It includes data on their distribution, sources, pathways of introduction, and ecological impacts. Users can find detailed information about specific types of debris, invasive species, and their interactions with marine ecosystems."
    },
    {
        question: "Can I access DeNIS for free?",
        answer: "Yes, DeNIS is freely accessible to all users. The platform is designed to promote open access to scientific information and facilitate the sharing of knowledge within the scientific community and beyond."
    },
    {
        question: "How frequently is the information on DeNIS updated?",
        answer: "DeNIS is committed to providing up-to-date information. The platform is regularly updated with new research findings, data, and relevant developments in the field of marine debris and non-indigenous species. However, the frequency of updates may vary depending on the availability of new information and research studies."
    },
    {
        question: "Can I contribute my research findings to DeNIS?",
        answer: "Yes, DeNIS welcomes contributions from researchers and experts in the field. If you have relevant research findings, data, or insights to share, you can contact the DeNIS team to discuss potential collaborations and contributions to the platform."
    },
    {
        question: "How can I navigate and search for information on DeNIS?",
        answer: "DeNIS offers a user-friendly interface with intuitive navigation. You can browse through different sections, access specific topics, or use WoRMS and HERE Maps to ease data entry. The platform is designed to make it easy for users to locate the information they need efficiently."
    },
];

function Faq() {
    const scrollParameters = handleScroll("faqContainer");

    return (
        <Container id="faqContainer">
            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/2.jpg" alt="" />
            </Title>
            <StyledContent>
                <div className="content-width">
                    <h2>How it works</h2>
                    <TutorialContainer>
                        <div>
                            <img src="/images/about/observation.svg" alt="" />
                            <p>Follow the protocol</p>
                        </div>
                        <div>
                            <img src="/images/about/add.svg" alt="" />
                            <p>Add reports to the database</p>
                        </div>
                        <div>
                            <img src="/images/about/visualize.svg" alt="" />
                            <p>Visualize obervations</p>
                        </div>
                    </TutorialContainer>

                    <VideoContainer />


                    <h2>Frequently asked questions</h2>
                    <p>Below you'll find answers to the most common questions you may have on DeNIS</p>

                    <StyledCollapse
                        defaultActiveKey={['0']}
                        ghost
                        accordion
                        expandIcon={({ isActive }) => isActive ? <img src="images/icons/minus.svg" /> : <img src="images/icons/plus.svg" />}
                    >
                        {questions.map((element, index) => (
                            <Collapse.Panel header={element.question} key={index}>
                                <p>{element.answer}</p>
                            </Collapse.Panel>
                        ))}


                    </StyledCollapse>

                    <br />
                    <p style={{ marginTop: "50px" }}> Want to help or still have questions? Contact us at <a href="mailto:info@denis-db.com">info@denis-db.com</a> </p>
                </div>

            </StyledContent>


        </Container>
    )
}

export default Faq