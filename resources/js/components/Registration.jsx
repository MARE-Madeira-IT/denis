import React, { useState } from "react";
import styled from "styled-components";
import { createUser } from "../redux/user/actions";
import { connect } from "react-redux";
import { dimensions } from "./Dashboard/dashboardHelper";
import { Link, useNavigate } from "react-router-dom";

const FormItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 20px 0px 50px 0px;
    flex-wrap: wrap;

    span {
        font-size: 16px;
        opacity: .8;
        width: 100px;
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



function Registration({ createUser }) {
    const [formData, setFormData] = useState({
        password: "",
        email: "",
        institution: "",
        country: "",
        name: "",
    });
    let navigate = useNavigate();

    const submitForm = (e) => {
        createUser(formData).then((response) => {
            if (response.value.status == 201) {
                navigate("/login");
            }
        });
    };

    return (
        <>
            <FormItem>
                <span>Name</span>
                <input
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
            </FormItem>
            <FormItem>
                <span>Email</span>
                <input
                    required
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
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
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
            </FormItem>
            <FormItem>
                <span>Confirm password</span>
                <input
                    name="password"
                    placeholder="Confirm password"
                    type="password"
                    label="Password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
            </FormItem>
            <FormItem>
                <span>Institution</span>
                <input
                    name="institution"
                    placeholder="Enter institution"
                    value={formData.institution}
                    onChange={(e) =>
                        setFormData({ ...formData, institution: e.target.value })
                    }
                />
            </FormItem>
            <FormItem>
                <span>Localization</span>
                <input
                    name="country"
                    placeholder="Eg. Madeira, Portugal"
                    value={formData.country}
                    onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                    }
                />
            </FormItem>
            <Submit>
                <p> Already have an account? <Link to="/login">Sign In</Link> </p>

                <button type="submit" onClick={submitForm}>Register</button>
            </Submit>


        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (data) => dispatch(createUser(data)),
    };
};

export default connect(null, mapDispatchToProps)(Registration);
