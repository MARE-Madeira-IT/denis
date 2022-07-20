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
        font-size: 80px;
        margin-bottom: 40px;
        margin-top: 0px;
        color: white;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
    }

    p {
        margin-top: 0px;
        font-size: 19.2px;
        font-family: 'Poppins', sans-serif;
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
                <h1>DATABASE</h1>
                <p>Marine debris & Non-Indigenous Species</p>
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