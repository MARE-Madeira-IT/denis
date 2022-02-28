import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import jwtDecode from "jwt-decode";
import { Provider } from 'react-redux'
import reducer from './reducer'
import ReactDOM from 'react-dom';
import Router from './router';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
    <Router />,
    document.getElementById('index')
)