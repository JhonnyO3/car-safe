import React from "react";
import { Link } from "react-router-dom";
import { DivHeader } from "../style/styled";
import stellantis from "../img/Stellantis.svg"
import logo from "../img/logo.png"

export default function Header() {
    return (
        <DivHeader>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
                <img src={stellantis} />


            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/" >Sobre</Link></li>
                <li><Link to="/" >Contato</Link></li>
                <li><Link to="/login" ><button>Login</button></Link></li>
                <li><Link to="/veiculo/cadastro-veiculo"><button>Cadastro</button></Link></li>
            </ul>
        </DivHeader>
    )
}