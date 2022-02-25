import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Title = styled.div`
    width: 50%;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;
    
    div {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 30%;
        z-index: 2;
        background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.4));
    }

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
`;

export const Content = styled.div`
    width: 50%;
    min-height: 100vh;
    padding: 100px 48px;
    box-sizing: border-box;
    text-align: justify;

    .content-width {
        width: 80%;
        margin: auto;
    }
`;