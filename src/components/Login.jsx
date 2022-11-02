import React from "react";
import { DivBody, DivRegistro } from "../style/styled";
import eletrico from "../img/eletrico2.svg"


export default function Login() {
    return (
        <DivBody>
            <DivRegistro>
                <div className="container">
                    <div className="form-image">
                        <img src={eletrico} alt="" />
                    </div>
                    <div className="form">
                        <form >
                            <div className="title">
                                <h1>Login</h1>
                            </div>
                            <div className="input-group">
                                <div className="input-box">
                                    <label>Nome Completo</label>
                                    <input type="text"
                                        name="nome"
                                        placeholder="Digite seu nome"
                                        required />
                                </div>
                                <div className="input-box">
                                    <label>Login</label>
                                    <input type="text"
                                        name="login"
                                        placeholder="Digite seu Login"
                                        required />
                                </div>
                            </div>
                            <button>Logar</button>
                            </form>

                    </div>
                </div>
            </DivRegistro>
        </DivBody>
    )
}