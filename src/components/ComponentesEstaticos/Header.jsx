import React from "react";
import { Link } from "react-router-dom";
import { DivHeader } from "../../style/styled";
import stellantis1 from "../../img/stellantis-255.png"
import logo1 from "../../img/logo1.png"
import { FiMenu } from 'react-icons/fi'
import { useEffect } from "react";




export default function Header() {
    const valida = sessionStorage.getItem("usuario-validado")





    const logout = () => {
        sessionStorage.removeItem("usuario-validado")
        window.location = "usuario/login"
    }


    return (
        <DivHeader>

            <div className="logo">
                <Link to="/"><img className="logoo" src={logo1} alt="" /></Link>
            </div>

            <div className="nav">
                <img className="stellantis" src={stellantis1} />
                <button className="menuLateral"><FiMenu /></button>

                <ul>
                    <li className="menu"><Link to="/" >Home</Link></li>
                    <li className="menu"><Link to="/" >Sobre</Link></li>
                    <li className="menu"><Link to="/" >Contato</Link></li>
                    <li className="menu"><Link to="/usuario/login" ><button className="cadastro" style={valida ? { display: "none" } : { display: "inline" }}>Login</button></Link></li>
                    <li className="menu"><Link to="/veiculo/cadastro-veiculo"><button className="cadastro" style={valida ? { display: "none" } : { display: "inline" }}>Cadastro</button></Link></li>
                    <li><Link to="/area-usuario"><button style={valida ? { display: "inline", marginRight: '30px' } : { display: "none" }}>Área usuario</button></Link></li>
                    <li><a><button style={valida ? { display: "inline", marginRight: '30px' } : { display: "none" }} onClick={logout}>Logout</button></a></li>
                </ul>
            </div>

        </DivHeader>
    )
}