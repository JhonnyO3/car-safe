import React from "react";
import { Link } from "react-router-dom";
import { DivHeader } from "../../style/styled";
import stellantis from "../../img/Stellantis.svg"
import logo from "../../img/logo.png"

export default function Header() {
    const valida = sessionStorage.getItem("usuario-validado")

    const logout = ()=> {
        sessionStorage.removeItem("usuario-validado")
        window.location = "usuario/login"
    }
    

    return (
        <DivHeader>
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
                <img src={stellantis} />


            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/" >Sobre</Link></li>
                <li><Link to="/" >Contato</Link></li>
                <li><Link to="/usuario/login" ><button style={valida ? {display: "none"}:  {display: "inline"} }>Login</button></Link></li>
                <li><Link to="/veiculo/cadastro-veiculo"><button style={valida ? {display: "none"}:  {display: "inline"} }>Cadastro</button></Link></li>
                <li><a><button style={valida ? {display: "inline"}:{display: "none"} } onClick={logout}>Logout</button></a></li>
                
            </ul>
        </DivHeader>
    )
}