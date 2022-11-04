import React from "react";
import { Link } from "react-router-dom";
import { DivPrincipal } from "../../style/styled";


export default function AreaUser() {
    return (
        <DivPrincipal>

        <div className="subMenu">
        <ul>
            <li><Link to="/" >Aplicação do Software</Link></li>
            <li><Link to="/info-pessoal" >Informacoes Pessoais</Link></li>
            <li><Link to="/" >Controle de acesso</Link></li>
            <li><Link to="/" >Ajuda</Link></li>
        </ul>
        </div>
        <div className="center">

        <div className="secao-principal">
            <h1>Olá, seja bem vindo a sessão principal do sístema!</h1>
            <div className="infos">

            <p>Aqui estão alguns detalhes do nosso projeto:</p>
            </div>

        </div>
        </div>
        </DivPrincipal>

    )
}