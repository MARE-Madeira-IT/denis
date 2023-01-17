import styled, { css } from "styled-components";

export const maxWidth = "2400px";
export const dimensions = {
    "xs": "575px",
    "sm": "576px",
    "md": "767px",
    "lg": "992px",
    "xl": "1200px",
    "xxl": "1600px",
    "maxWidth": "1440px",
};

export const maxWidthStyle = css`
    padding: 0px 100px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.maxWidth}) {
        padding: 0px 50px;
    }

    @media (max-width: 767px) {
        padding: 0px 20px;
    }
`;

export const font = "Poppins";



export const Create = styled.button`
    padding: 12px 15px;
    background-color: #0C4C88;
    border: 0px;
    box-shadow: none;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #082d4f;
    }
`;
