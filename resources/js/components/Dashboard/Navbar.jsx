import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dimensions, maxWidth } from './dashboardHelper';
import { connect } from "react-redux";
import { logout, setAuthorizationToken } from '../../redux/auth/actions';
import { Dropdown, Menu } from 'antd';

const Container = styled.div`
    width: 100%;
    background-color: #0C4C88;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        padding: 10px 20px;        
    }
`;

const Content = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    display: flex;
    justify-content: space-between;
`;

const Title = styled(NavLink)`
    padding: 10px 50px 10px 0px;
    box-sizing: border-box;

    h1 {
        width: 100%;
        box-sizing: border-box;
        margin:0px;
        font-size: 64px;
        color: white;
        font-weight: 900;
        line-height: 64px;
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0.041em;
    }

    h2 {
        font-family: 'Lato', sans-serif;
        margin:0px;
        font-weight: 300;
        color: white;
        letter-spacing: -0.04em;
        font-size: 18px;
        line-height: 18px;
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

        h2 {
            font-size:16px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        h1 {
            font-size: 28px;
        } 
        
        h2 {
            display: none;
        }
    }
`;

const PagesContainer = styled.div`
    margin: auto;
    padding: 0px;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;

    .link--active{
        span {
            font-weight: bold;
        }
    }
    
`;

const PageContainer = styled(NavLink)`
    font-size: 18px;
    text-decoration: none;
    color: white;

    span {
        margin: 0px 20px;
        transition: all .3s ease;
    }

    &:hover {
        color: white;

        span {
            font-weight: bold;
        }
        
    }
`;

const Logout = styled.div`
    font-size: 18px;
    text-decoration: none;
    color: white;
    margin: 0px 20px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        color: white;
        font-weight: bold;
        
        
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

function Navbar({ permissionLevel, setAuthorizationToken, logout }) {
    let navigate = useNavigate();

    const handleLogout = () => {

        logout().then((response) => {
            if (response.action.payload.status == 200) {
                localStorage.removeItem("token");
                navigate("/")
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
                            <NavLink className='link' to={item.to}>{item.title}</NavLink>
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
        <Container>
            <Content>
                <Title to="/">
                    <h1>Database</h1>
                    <h2>MARINE DEBRIS & NON-INDIGENOUS SPECIES</h2>
                </Title>
                <PagesContainer>
                    {navbarItems.map((item, index) => (
                        <>
                            {permissionLevel >= item.treshold &&
                                <PageContainer
                                    className={({ isActive }) => isActive ? "link--active" : undefined}
                                    key={index}
                                    to={item.to}>
                                    <span>{item.title}</span>
                                </PageContainer>}
                        </>
                    ))}
                    <Logout onClick={handleLogout} className='link'>
                        Logout
                    </Logout>
                </PagesContainer>
                <MenuIcon>
                    <Dropdown overlay={menu}>
                        <img src="/icons/menu.svg" alt="menu" />
                    </Dropdown>
                </MenuIcon>
            </Content>
        </Container >
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
