import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";

export const history = createBrowserHistory();

const Router = () => {
    return (
        <Layout>
            <BrowserRouter history={history}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default Router;
