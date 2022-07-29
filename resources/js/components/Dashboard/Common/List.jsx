import { Row } from 'antd';
import React from 'react'
import styled from "styled-components";

const Item = styled.div`
    padding: 16px;
    width: 33%;
    box-sizing: border-box;
    

    
    

    .content {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Lato';
        padding: 32px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,.2);
        transition: box-shadow .3s ease;
        cursor: pointer;
        position: relative;

        .status-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #B7DAFB;
            transition: background-color .3s ease;
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
                font-size: 20px;
            }

            p {
                font-size: 16px;
            }
        }

        img {
            height: 60px;
        }
    }  
`;

function List({ setActiveModal, items }) {


    return (
        <Row type="flex" justify='start'>
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
        </Row>
    )
}

export default List