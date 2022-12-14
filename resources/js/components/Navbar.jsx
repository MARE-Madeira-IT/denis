import { Dropdown, Menu } from 'antd';
import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dimensions } from './Dashboard/dashboardHelper';
import { logout, setAuthorizationToken } from "../redux/auth/actions";

const FlexContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 990;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 100px 0px 100px;
    box-sizing: border-box;

    .link {
        color: black; 
        cursor: pointer;  
    }  

    @media (max-width: ${dimensions.xl}) {
        padding: 50px 50px 0px 50px;
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 50px 20px;
    }

    @media (max-width: ${dimensions.md}) {
        justify-content: space-around;
        padding: 20px;
        position: absolute;
        align-items: center;

        .link {
            display: none;
        }
    }
`;

const Logo = styled.div`
    width: 50%;
    color: white;    
    position: relative;

    
    h1 {
        width: 100%;
        box-sizing: border-box;
        margin:0px;
        font-size: clamp(32px, 6vw, 50px);
        color: inherit;
        font-weight: 100;
        line-height: 94%;
        font-family: 'Prata', serif;
        letter-spacing: 0.041em;
    }

    .menu {
        position: absolute;
        right: 0;
        top: 0;
        display: none;
        cursor: pointer;

        img {
            width: 20px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        text-align: center;
        margin-top: 10px;
        width: 100%;

        .menu {
            display: block;
        }
    }


    
`;


const Login = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    background-color: white;

    

    a {
        color: white;

        &:hover {
            color: white;
        }
    }

    @media (max-width: ${dimensions.xl}) {
        font-size: 14px;
        gap: 10px;
    }

    @media (max-width: ${dimensions.lg}) {
        display: none;
    }

    
`;

const navbarItems = [
    { to: "/dashboard/", title: "Profile", treshold: 0 },
    { to: "/dashboard/reports", title: "Reports", treshold: 0 },
    { to: "/dashboard/users", title: "Users", treshold: 2 },
    { to: "/dashboard/debris", title: "Debris", treshold: 0 },
    { to: "/dashboard/ecosystems", title: "Ecosystems", treshold: 0 },
];



function Navbar({ permissionLevel,
    isAuthenticated, setAuthorizationToken, logout }) {

    const handleLogout = () => {

        logout().then((response) => {
            if (response.action.payload.status == 200) {
                localStorage.removeItem("token");
                setAuthorizationToken(false);
            }
        });
    };

    const menu = (
        <Menu>
            {navbarItems.map((item, index) => (
                <>
                    {permissionLevel >= item.treshold &&
                        <Menu.Item key={index}>
                            <Link className='link' to={item.to}>{item.title}</Link>
                        </Menu.Item>
                    }
                </>
            ))}
            <Menu.Item key={index}>
                <div onClick={handleLogout} className='link'>
                    Logout
                </div>
            </Menu.Item>
        </Menu>
    );
    return (
        <FlexContainer>
            <Logo>
                <h1>DeNIS</h1>

                <div className='menu'>
                    <Dropdown overlay={!isAuthenticated ?
                        <Menu>
                            <Menu.Item>
                                <Link to="/login">
                                    Login
                                </Link>
                            </Menu.Item>
                        </Menu>
                        : menu}>
                        <img src="/icons/menu_white.svg" alt="menu" />
                    </Dropdown>
                </div>
            </Logo>


            {isAuthenticated ?
                <Login>
                    {navbarItems.map((item, index) => (
                        <>
                            {
                                permissionLevel >= item.treshold &&
                                <Link key={index} className='link' to={item.to}>
                                    {item.title}
                                </Link>
                            }


                        </>

                    ))}

                    <div onClick={handleLogout} className='link'>
                        Logout
                    </div>
                </Login> : <Link className='link' to="/login">Login</Link>
            }
            {/* 
            {isAuthenticated &&
                <MenuIcon>
                    <Dropdown overlay={menu}>
                        <img src="/icons/menu_white.svg" alt="menu" />
                    </Dropdown>
                </MenuIcon>
            } */}

        </FlexContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

const mapStateToProps = (state) => {
    return {
        permissionLevel: state.auth.permissionLevel,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);