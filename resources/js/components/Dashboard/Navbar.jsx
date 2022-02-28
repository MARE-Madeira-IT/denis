import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { profile, reports, validation, ecosystem, users, litter } from './icons';

const navbarItems = [
    { to: "/dashboard/", image: profile(), title: "Profile" },
    { to: "/dashboard/reports", image: reports(), title: "Reports" },
    { to: "/dashboard/validation", image: validation(), title: "Validation" },
    { to: "/dashboard/users", image: users(), title: "Users" },
    { to: "/dashboard/litter", image: litter(), title: "Litter" },
    { to: "/dashboard/ecosystems", image: ecosystem(), title: "Ecosystems" },
];

const Container = styled.div`
    width: 100%;
    
`;

const LogoContainer = styled.h1`
    text-align: center;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-transform: uppercase;
    font-size: 28px;
`;

const PagesContainer = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #dddddd;
    display: flex;
    justify-content: space-around;

    .link--active{
        svg {
            fill: #5b64bd;
        }
        
    }
    
`;

const PageContainer = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: black;

    &:hover {
        color: black;
        
        svg {
            fill: #5b64bd;
        }
        
    }

    img, svg {
        fill: #000000;
        display: block;
        width: 25px;
        height: 25px;
        margin: 0px auto 10px auto;
    }
`;


function Navbar() {
    return (
        <Container>
            <PagesContainer>
                {navbarItems.map((item, index) => (
                    <PageContainer
                        className={({ isActive }) => isActive ? "link--active" : ''}
                        key={index}
                        to={item.to}>
                        {item.image} {item.title}
                    </PageContainer>
                ))}
            </PagesContainer>
        </Container>
    )
}

export default Navbar
