import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { dimensions, maxWidth, maxWidthStyle } from '../dashboardHelper';

const Container = styled.section`
    min-height: calc(50vh - 50px);
    
    ${maxWidthStyle}
    padding-top: 10vh;

    h2 {
        color: white;
        font-size: clamp(26px, 6vw, 40px);
        margin-bottom: 0px;
        margin-top: 20px;
    }

    h4 {
        color: white;
        font-size: 18px;
        width: 40%;
        font-weight: 400;
        opacity: .8;
        margin-top: 0px;
    }

    a {
        color: white;
        background-color: rgba(255,255,255,.3);
        padding: 6px 14px;
        border-radius: 12px;

        img {
            height: 12px;
            margin-right: 5px;
        }
    }

    @media (max-width: ${maxWidth}) {

        h4 {
            width: 70%
        }

    }
    @media (max-width: ${dimensions.lg}) {

        h4 {
            width: 100%;
            font-size: 16px;
        }
    }


    @media (max-width: ${dimensions.md}) {
        h2 {
            margin-top: 10px;
        }

        h4 {
            display: none;
        }
    }
`;


function PageHeader({ title, link = true, subtitle }) {
    return (
        <Container>
            {link &&
                <Link to="/dashboard">
                    <img src="/images/icons/dashboard/back.svg" alt="back" /> Back to profile
                </Link>
            }

            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </Container>
    )
}

export default PageHeader