import { Row } from 'antd';
import React from 'react'
import styled from "styled-components";
import { dimensions, maxWidthStyle } from '../dashboardHelper';

const Container = styled.section`
    ${maxWidthStyle}
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;


const Item = styled.div`
    padding: 16px;
    width: 25%;
    box-sizing: border-box;

    @media (max-width: ${dimensions.xl}) {
        width: 33%;
    }
    

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
        
    }

    @media (max-width: ${dimensions.sm}) {
        width: 100%;
        padding: 10px 0px;
    }
    
    .content {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px;
        height: 100%;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        transition: box-shadow .3s ease;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        cursor: pointer;
        position: relative;
        background-color: white;

        @media (max-width: ${dimensions.sm}) {
            padding: 16px;
        }

        .status-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #B7DAFB;
            transition: background-color .3s ease;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }

        &:hover {
            box-shadow: 0px 0px 13px 0px rgba(0,0,0,.3);

            .status-bar {
                background-color: #0C4C88;
            }
        }

        .information {
            flex: 1;
            padding: 0px 32px 0px 0px;
            box-sizing: border-box;

            h3 {
                font-weight: bold;
                font-size: clamp(18px,4vw,  20px);
            }

            p {
                font-size: clamp(14px,4vw,  16px);
            }
        }

        img {
            height: 60px;
        }
    }  
`;

function List({ setActiveModal, items }) {


    return (
        <Container>
            {items.map((item, index) => (
                <Item key={index}>
                    <div className='content' onClick={() => setActiveModal(index)}>
                        <div className='status-bar' />
                        <div className='information'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        <img src={"/icons/" + item.image + ".svg"} />
                    </div>
                </Item>
            ))}
        </Container>
    )
}

export default List