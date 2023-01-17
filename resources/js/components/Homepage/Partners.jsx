import React from 'react'
import styled from 'styled-components';
import { Container, Title, Content } from "./style"
import handleScroll from "../Helper/handleScroll";
import { dimensions } from '../Dashboard/dashboardHelper';
import { Collapse } from 'antd';

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
        font-weight: lighter;
        font-size: 16px;
        opacity: .8;
    }
    
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-around;
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
            border-left: 2px solid #0C4C88;
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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Partners() {
    const scrollParameters = handleScroll("partnerContainer");

    return (
        <Container id="partnerContainer">
            <Title>
                <img style={{ transform: "scale(" + scrollParameters.scale + ")" }} src="/images/homepage/2.jpg" alt="" />
            </Title>
            <StyledContent>
                <div className="content-width">
                    <h2>Our Partners & Supporters</h2>
                    <p>DeNIS partners are the barebones that make this platform available for the scientific community.</p>

                    <Flex>
                        <div><img src="/images/partners/arditi.jpg" alt="ARDITI" /></div>
                        <div><img src="/images/partners/mare.svg" alt="MARE" /></div>
                        <div><img src="/images/partners/ICES.svg" alt="ICES" /></div>
                        <div><img src="/images/partners/wave.png" alt="wave" /></div>
                    </Flex>

                    {/* <h2>Frequently asked questions</h2>
                    <p>Below you'll find answers to the most common questions you may have on DeNIS</p>

                    <StyledCollapse
                        defaultActiveKey={['1']}
                        ghost
                        accordion
                        expandIcon={({ isActive }) => isActive ? <img src="images/icons/minus.svg" /> : <img src="images/icons/plus.svg" />}
                    >
                        <Collapse.Panel header="This is panel header 1" key="1">
                            <p>{text}</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="This is panel header 2" key="2">
                            <p>{text}</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="This is panel header 3" key="3">
                            <p>{text}</p>
                        </Collapse.Panel>
                    </StyledCollapse> */}

                    <br />
                    <p style={{ marginTop: "50px" }}> Want to help or still have questions? Contact us at <a href="">email@email.com</a> </p>
                </div>

            </StyledContent>


        </Container>
    )
}

export default Partners