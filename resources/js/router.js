import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/Homepage";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Layout from "./components/Layout";
import MapView from "./components/MapView";
import PrivateRoute from "./components/Dashboard/PrivateRoute";

import DashboardHomepage from "./components/Dashboard/Components/Homepage";

import Debris from "./components/Dashboard/Components/Debris/DebrisMain";
import Ecosystem from "./components/Dashboard/Components/Ecosystem/EcosystemMain";
import Report from "./components/Dashboard/Components/Report/Report";
import Validation from "./components/Dashboard/Components/Validation/Validation";
import User from "./components/Dashboard/Components/User/User";

export const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>

            <Routes>
                <Route exact path="/map" element={<Layout><MapView /></Layout>} />
                <Route exact path="/" element={<Layout><Homepage /></Layout>} />

                <Route exact path="/dashboard/debris" element={<DashboardLayout><PrivateRoute Component={Debris} /></DashboardLayout>} />
                <Route exact path="/dashboard/ecosystems" element={<DashboardLayout><PrivateRoute Component={Ecosystem} /></DashboardLayout>} />
                <Route exact path="/dashboard/reports" element={<DashboardLayout><PrivateRoute Component={Report} /></DashboardLayout>} />
                <Route exact path="/dashboard/validation" element={<DashboardLayout><PrivateRoute Component={Validation} /></DashboardLayout>} />
                <Route exact path="/dashboard/users" element={<DashboardLayout><PrivateRoute Component={User} /></DashboardLayout>} />
                <Route exact path="/dashboard/" element={<DashboardLayout><PrivateRoute Component={DashboardHomepage} /></DashboardLayout>} />
            </Routes>


        </BrowserRouter >
    );
};

export default Router;
