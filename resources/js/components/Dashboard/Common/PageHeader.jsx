import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { dimensions, maxWidth } from '../dashboardHelper';

const Container = styled.section`
    box-sizing: border-box;
    padding: 100px 100px 50px 100px;
    width: 100%;

    h2 {
        color: white;
        font-size: clamp(26px, 6vw, 40px);
        line-height: 110%;
    }

    h4 {
        color: white;
        font-size: 18px;
        width: 40%;
        font-weight: 400;
        opacity: .8;
    }

    a {
        color: white;
        background-color: rgba(255,255,255,.3);
        padding: 6px 14px;
        margin-bottom: 40px;
        border-radius: 12px;

        img {
            height: 12px;
            margin-right: 5px;
        }
    }

    @media (max-width: ${maxWidth}) {
        padding: 100px 50px 50px 50px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 50px 20px 50px 20px;

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
            {link && <Link to="/dashboard"> <img src="/icons/dashboard/back.svg" alt="back" /> Back to profile</Link>}

            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </Container>
    )
}

export default PageHeader