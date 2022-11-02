import React from "react";
import { Route, Routes } from "react-router-dom";
import Cadastro from "../components/Cadastro";
import Home from "../components/Home";
import Login from "../components/Login";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}