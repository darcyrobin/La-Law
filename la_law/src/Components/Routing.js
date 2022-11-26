import React from "react";
import Layout from "./Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CaseStudy from "./Pages/CaseStudy";
import GlobalNews from "./Pages/GlobalNews";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyNetwork from "./Pages/MyNetwork";
import Profile from "./Pages/Profile";
import Store from "./Pages/Store";

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            exact
            path="/store"
            element={
              <Layout>
                <Store />
              </Layout>
            }
          />
          <Route
            exact
            path="/case_study"
            element={
              <Layout>
                <CaseStudy />
              </Layout>
            }
          />
          <Route
            exact
            path="/my_network"
            element={
              <Layout>
                <MyNetwork />
              </Layout>
            }
          />
          <Route
            exact
            path="/global_news"
            element={
              <Layout>
                <GlobalNews />
              </Layout>
            }
          />
          <Route
            exact
            path="/myprofile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
