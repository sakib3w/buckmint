import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../containers/AuthPages/Login";
import Dashboard from "./dashboard";
import Page404 from "../containers/Page404NotFound/Page404";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </>
  );
};

export default Routers;
