import React, { useEffect } from "react";
import { DivAreaUsuario, DivInfoPessoal } from "../../style/styled";
import zerati from "../../img/zerati.png"

import MenuLateral from "../ComponentesEstaticos/MenuLateral";


export default function AreaUser() {
    const usuario = JSON.parse(sessionStorage.getItem("usuario-validado")) 
    
    /*

    useEffect(()=> {
        if (valida == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }

    }, [])*/
    
    return (
        <DivAreaUsuario>

        <div className="subMenu">
        <MenuLateral/>     
        </div>
        <div className="center">

        <div className="secao-principal">
            <h1>Olá <span>{usuario.nome}</span>, seja bem vindo a área do usuario!!</h1>
            <div className="infos">

            <p>Você pode conhecer nossa solução acessando o menu lateral da area do usuario!</p>
            </div>

        </div>
        </div>
        <div className="imagem">
            <img src={zerati} alt="" />
        </div>
        </DivAreaUsuario>

    )
}