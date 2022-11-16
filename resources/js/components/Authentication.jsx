import React from "react";
import styled from "styled-components";
import { dimensions } from "./Dashboard/dashboardHelper";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    position: relative;
`;

const FormContainer = styled.div`
    padding: 50px;
    box-sizing: border-box;
    width: 100%;

    @media (max-width: ${dimensions.md}) {
        padding: 20px;
    }
`;

const Card = styled.div`
    width: 50%;
    max-width: 720px;
    min-width: 120px;
    display: block;
    background:white;	
	box-shadow: 0px 0px 12px #4d4d4d5a;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 90%;
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
    }
`;


const Submit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;

    p {
        font-size: 16px;
        margin: 0px;
        opacity: .8;

        a {
            font-weight: bold;
            color: black;
        }
    }


    button {
        display: block;
        padding: 8px 16px;
        border: none;
        background: #3C6466;
        color: white;
        cursor: pointer;
        font-size: 16px;
        transition: all .2s ease;

        &:hover {
            background: #385b5e;
        }
    }

    @media (max-width: ${dimensions.md}) {
        p {
            width: 100%;
            margin-bottom: 10px;
        }
    }
        
`;

const BackButton = styled(Link)`
    position: absolute;
    top: 28px;
    left: 28px;
    width: 50px;
    border-radius: 50px;
    background: #ffffff;
    height: 50px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
    }
`;

const Header = styled.section`
    background: url("/images/auth/header.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;


    h1 {
        text-transform: uppercase;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 36px;
        margin: 0px;
    }
    

`;

function Authentication({ children, title }) {
    return (
        <Container>
            <BackButton to="/">
                <img src="/images/map/back-button.svg" alt="back-button" loading='eager' />
            </BackButton>
            <Card>

                <Header>
                    <h1>{title}</h1>
                </Header>

                <FormContainer>
                    {children}

                </FormContainer>
            </Card>
        </Container>
    )
}

export default Authentication
