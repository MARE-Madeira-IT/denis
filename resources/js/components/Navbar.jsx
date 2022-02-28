import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexContainer = styled.div`
    position: fixed;
    top: 0%;
    bottom: auto;
    z-index: 990;
    width: 100%;
    text-transform: uppercase;
    color: white;
`;

const Logo = styled(FlexContainer)`
    left:48px;
    top: 48px;

    h1 {
        font-size: 48px;
        margin-bottom: 10px;
        margin-top: 0px;
    }

    p {
        margin-top: 0px;
        font-size: 18px;
    }
    
`;


const Login = styled(FlexContainer)`
    right:48px;
    top: 48px;
    width: 35px;

    .link {
        img {
            width: 100%;
            float: right;
            cursor: pointer;
        }     
    }   
`;

function Navbar() {
    return (
        <Fragment>
            <Logo>
                <h1>LOREM</h1>
                <p>Lorem ipsum dolor.</p>
            </Logo>
            <Login>
                <Link className='link' to="/dashboard">
                    <img src="/images/navbar/login.svg" alt="" />

                </Link>
            </Login>
        </Fragment>
    )
}

export default Navbar