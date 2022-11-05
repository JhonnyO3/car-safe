import React, { useEffect } from "react";
import { DivInfoPessoal } from "../../style/styled";
import zerati from "../../img/zerati.png"

import MenuLateral from "../ComponentesEstaticos/MenuLateral";


export default function AreaUser() {
    /*
    const valida = sessionStorage.getItem("usuario-validado")
    

    useEffect(()=> {
        if (valida == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }

    }, [])*/
    
    return (
        <DivInfoPessoal>

        <div className="subMenu">
        <MenuLateral/>     
        </div>
        <div className="center">

        <div className="secao-principal">
            <h1>Olá, seja bem vindo a sessão principal do sístema!</h1>
            <div className="infos">

            <p>Aqui estão alguns detalhes do nosso projeto:</p>
            </div>

        </div>
        </div>
        <div className="imagem">
            <img src={zerati} alt="" />
        </div>
        </DivInfoPessoal>

    )
}