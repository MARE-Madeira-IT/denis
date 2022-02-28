import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import DashboardLayout from "./components/Dashboard/Components/Homepage";
import Layout from "./components/Layout";
import MapView from "./components/MapView";
import PrivateRoute from "./components/Dashboard/PrivateRoute";

export const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route exact path="/dashboard/" element={<PrivateRoute Component={DashboardLayout} />} />
            </Routes>
            <Layout>
                <Routes>
                    <Route exact path="/map" element={<MapView />} />
                    <Route exact path="/" element={<Homepage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
