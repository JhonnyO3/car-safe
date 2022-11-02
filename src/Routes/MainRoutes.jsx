import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}