import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
    margin-bottom: 100px;

    h2 {
        margin-top: 30px;
        margin-bottom: 12px;
        font-size: 32px;
        line-height: 100%;
        font-weight: 400;
        text-align: left;
    }
    
    p, li {
        font-weight: 200;
        font-size: 16px;
        margin: 0px 0px 50px 0px;
    }

    video {
        width: 100%;
        height: auto;
        cursor: pointer;
    }

`;

function VideoContainer() {
    return (
        <Container>
            <h2>How to create a report in DeNIS</h2>
            <p>Learn how to effectively generate comprehensive reports using DeNIS data, analysis tools, and interactive features to drive evidence-based decision-making and foster innovative solutions for marine debris and non-indigenous species</p>

            <video controls>
                <source src="/images/denis_video.mp4" type="video/mp4" />
            </video>
        </Container>
    )
}

export default VideoContainer