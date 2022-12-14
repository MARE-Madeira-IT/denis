import styled from 'styled-components';
import { dimensions } from '../Dashboard/dashboardHelper';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
`;

export const Title = styled.div`
    width: 50%;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;

    img {
        position: absolute;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .2s ease;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        height: 50vh;
        top: auto;
        position: static;

        img {
            position: static;
        }
    }
`;

export const Content = styled.div`
    width: 50%;
    min-height: 100vh;
    padding: 100px 0px;
    box-sizing: border-box;
    text-align: justify;

    .content-width {
        width: 100%;
        max-width: 960px;
        margin: auto;
        padding: 0px 100px;
        box-sizing: border-box;
    }

    @media (max-width: ${dimensions.xl}) {
        
        .content-width {
            padding: 0px 50px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        padding: 50px 0px;
        
        .content-width {
            padding: 0px 20px;
        }
    }
`;