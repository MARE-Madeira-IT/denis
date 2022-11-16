import React, { Component } from "react";
import styled from "styled-components";
import { login } from "../redux/auth/actions";
import { connect } from "react-redux";
import { dimensions } from "./Dashboard/dashboardHelper";
import { Link } from "react-router-dom";

const FormItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 20px 0px 50px 0px;
    flex-wrap: wrap;

    span {
        font-size: 16px;
        opacity: .8;
        min-width: 100px;
    }

    input {
        flex: 1;
        box-sizing: border-box;
        margin: 0px;
        border: none;
        border-bottom: 1px solid #acacac;
        padding: 0px 8px 8px 8px;
        transition: all .3s ease;
        opacity: .4;
        font-size: 14px;

        &:focus,
        &:active, &:hover {
            outline: none;
            border: none;
            border-bottom: 1px solid  black;
            background-color: white !important;
            appearance: none;
        }

        ::placeholder {
            font-size: 14px;
            display: inline-block;
            margin-left: 10px;
           
        }
    }

    @media (max-width: ${dimensions.md}) {
        span {
            width: 100%;
            margin-bottom: 10px;
        }

        input {
            width: 100%;
        }
    }
    
`;


const Submit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;

    p {
        font-size: 16px;
        margin: 0px;
        opacity: .8;

        a {
            font-weight: bold;
            color: black;
        }
    }


    button {
        display: block;
        padding: 8px 16px;
        border: none;
        background: #3C6466;
        color: white;
        cursor: pointer;
        font-size: 16px;
        transition: all .2s ease;

        &:hover {
            background: #385b5e;
        }
    }

    @media (max-width: ${dimensions.md}) {
        p {
            width: 100%;
            margin-bottom: 10px;
        }
    }
        
`;



class Login extends Component {
    state = {
        password: "",
        email: "",
    };

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(this.state).map((field) => {
            formData.append(field[0], field[1]);
        });

        this.props.login(formData);
    };

    render() {
        return (
            <>
                <FormItem>
                    <span>Email</span>
                    <input
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        label="Email"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                    />
                </FormItem>
                <FormItem>
                    <span>Password</span>
                    <input
                        name="password"
                        placeholder="Enter password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                </FormItem>
                <Submit>
                    <p> Don't have an account yet? <Link to="/register">Sign Up</Link> </p>

                    <button onClick={this.submitForm}>Login</button>
                </Submit>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    };
};

export default connect(null, mapDispatchToProps)(Login);
