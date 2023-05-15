import styled, { css } from "styled-components";
import { colors } from "../../helper";
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
    padding: 8px 16px;
    min-width: 120px;
    background-color: ${colors.main};
    border: 2px solid ${colors.main};
    box-shadow: none;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    transition: all .3s ease;
    font-weight: bold;
    &:hover {
        border-color: ${colors.mainHover};
        background-color: ${colors.mainHover};
    }
`;

export const CreateSecundary = styled(Create)`
    background-color: transparent;
    color: ${colors.main};

    &:hover {
        
        color: ${colors.mainHover};
        background-color: white;
    }
`;
