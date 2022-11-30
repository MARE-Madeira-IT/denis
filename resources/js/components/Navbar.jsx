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
    padding: 50px 100px 0px 30px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.xl}) {
        padding: 50px 50px 0px 50px;
    }

    @media (max-width: ${dimensions.lg}) {
        padding: 50px 20px;
    }

    @media (max-width: ${dimensions.md}) {
        justify-content: flex-end;
        padding: 20px;
    }
`;

const Logo = styled.div`
    width: 50%;
    color: white;    

    h1 {
        width: 100%;
        box-sizing: border-box;
        margin:0px;
        font-size: 60px;
        color: inherit;
        font-weight: 900;
        line-height: 94%;
        font-family: 'Prata', serif;
        letter-spacing: 0.041em;
    }

    @media (max-width: ${dimensions.xl}) {

        h1 {
            font-size: 62px;
        }        
    }

    @media (max-width: ${dimensions.lg}) {

        h1 {
            font-size: 48px;
        }

    }

    @media (max-width: ${dimensions.md}) {
        display: none;
    }
    
`;


const Login = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    .link {
        color: black; 
        cursor: pointer;
    }   

    @media (max-width: ${dimensions.xl}) {
        display: none;
    }
`;

const MenuIcon = styled.div`
    display: none;
    cursor: pointer;

    img {
        width: 40px;
        float: right;
        margin-top: 10px;
    }

    @media (max-width: ${dimensions.xl}) {
        display: block;
    }

    @media (max-width: ${dimensions.lg}) {
        img {
            width: 30px;
        }
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
            </Logo>
            <Login>

                {isAuthenticated ?
                    <>
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
                    </>
                    : <Link className='link' to="/login">Login</Link>}

            </Login>

            <MenuIcon>
                {isAuthenticated ?
                    <Dropdown overlay={menu}>
                        <img src="/icons/menu.svg" alt="menu" />
                    </Dropdown>

                    : <Link className='link' to="/login">Login</Link>}

            </MenuIcon>
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