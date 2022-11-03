import React from "react";
import { Route, Routes } from "react-router-dom";
import Cadastro from "../components/FormulariosAcesso/Cadastro";
import FormCarro from "../components/FormulariosAcesso/FormCarro";
import Login from "../components/FormulariosAcesso/Login";
import Home from "../components/PaginaInicial/Home";

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/usuario/cadastro-usuario" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/veiculo/cadastro-veiculo" element={<FormCarro/>} />
        </Routes>
    )
}