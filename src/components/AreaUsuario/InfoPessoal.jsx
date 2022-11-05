import React from "react";
import { DivInfoPessoal } from "../../style/styled";
import jeep from "../../img/jeep.png"
import MenuLateral from "../ComponentesEstaticos/MenuLateral";


export default function InfoPessoal() {
/*
    const valida = sessionStorage.getItem("usuario-validado")
    

    useEffect(()=> {
        if (valida) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/usuario/login"
        }
    }, [])*/
    

    return(
        <DivInfoPessoal>
        <div className="subMenu">
        <MenuLateral/>     
        </div>
        <div className="center">

        <div className="secao-principal">
            <h1>Olá, nessa seção você pode visualizar seus dados pessoais!</h1>
            <div className="infos">
            <p>Nome do usuario:</p>
            <p>Login:</p>
            <p>Placa do veículo:</p>
            <p>modelo do veículo:</p>
            <p>Idade:</p>
            <p>Nacionalidade:</p>
            <p>Tipo Sanguineo:</p>
            <p>Nome do usuario:</p>
            </div>

        </div>
        </div>
        <div className="imagem">
            <img src={jeep} alt="" />
        </div>
        </DivInfoPessoal>

    )
}