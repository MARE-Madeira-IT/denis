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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunk,
            promise,
        )
    )
)

if (localStorage.token) {
    const token = jwtDecode(localStorage.token);
    const tokenExp = token.exp < Date.now() / 1000;

    if (tokenExp) {
        store.dispatch(refreshAuthorizationToken(localStorage.token));
    } else {
        store.dispatch(loginSuccess());
        setAuthorizationToken(localStorage.token);
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('index')
)