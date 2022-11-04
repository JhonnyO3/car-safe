import React from "react";
import { DivInfoPessoal, DivPrincipal } from "../../style/styled";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"


export default function InfoPessoal() {
    const usuarioObj = JSON.parse(sessionStorage.getItem("dados-usuario"))

    return(
        <DivInfoPessoal>

        <div className="subMenu">
        <ul>
            <li><Link to="/" >Aplicação do Software</Link></li>
            <li><Link to="/info-pessoal" >Informacoes Pessoais</Link></li>
            <li><Link to="/" >Controle de acesso</Link></li>
            <li><Link to="/" >Ajuda</Link></li>
        </ul>
        </div>
        <div className="center">
            <img src={logo} alt="" />

        <div className="secao-principal">
            <h1>Olá , seja bem vindo a sessão principal do sístema!</h1>
            <div className="infos">

            <p>Aqui estão alguns detalhes do nosso projeto:</p>
            </div>

        </div>
        </div>
        </DivInfoPessoal>

    )
}