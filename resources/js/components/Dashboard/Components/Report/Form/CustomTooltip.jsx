import { Tooltip } from 'antd';
import React from 'react'
import styled from 'styled-components';

const Container = styled(Tooltip)`
    margin-left: 10px;
    cursor: pointer;
    width: 15px;
    height: 15px;
`;


function CustomTooltip({ text }) {
    return (
        <Container
            title={text}
        >
            <img src="/images/icons/form/tooltip.svg" />
        </Container>
    )
}

export default CustomTooltip