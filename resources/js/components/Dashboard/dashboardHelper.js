import styled, { css } from "styled-components";

export const maxWidth = "1440px";

export const maxWidthStyle = css`
    padding: 0px 100px;
    box-sizing: border-box;

    @media (max-width: ${maxWidth}) {
        padding: 0px 50px;
    }

    @media (max-width: 767px) {
        padding: 0px 20px;
    }
`;

export const font = "Poppins";

export const dimensions = {
    "xs": "575px",
    "sm": "576px",
    "md": "767px",
    "lg": "992px",
    "xl": "1200px",
    "xxl": "1600px",
    "maxWidth": maxWidth,
};