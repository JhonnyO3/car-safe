import React from "react";
import registro from "../img/registro.svg"
import { DivBody, DivRegistro } from "../style/styled";


export default function Cadastro() {
    return (
        <DivBody>
            <DivRegistro>
                <div className="container">
                    <div className="form-image">
                        <img src={registro} alt="" />
                    </div>
                    <div className="form">
                        <form >
                            <div className="title">

                                <h1>Cadastre-se</h1>
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
                                <div className="input-box">
                                    <label>Senha</label>
                                    <input type="password"
                                        name="login"
                                        placeholder="Digite sua Senha"
                                        required />
                                </div>
                                <div className="input-box">
                                    <label>Profissão</label>
                                    <input type="text"
                                        name="nome"
                                        placeholder="Digite sua profissao"
                                        required />
                                </div>
                                <div className="input-box">
                                    <label>Idade</label>
                                    <input type="text"
                                        name="nome"
                                        placeholder="Digite sua profissao"
                                        required />
                                </div>
                                <div className="input-box">
                                    <label>Salario</label>
                                    <input type="text"
                                        name="nome"
                                        placeholder="Digite sua profissao"
                                        required />
                                </div>
                                <div className="input-box">
                                    <label>Genero</label>
                                    <div className="gender-input">
                                        <input type="radio" name="sexo" id="sexo-m" required />
                                        <label form="sexo-m">Masculino</label>
                                    </div>
                                    <div className="gender-input">
                                        <input type="radio" name="sexo" id="sexo-f" required />
                                        <label form="sexo-f">Feminino</label>
                                    </div>
                                    <div className="gender-input">
                                        <input type="radio" name="sexo" id="sexo-any" required />
                                        <label form="sexo-f">Prefiro não informar</label>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label>Nacionalidade</label>
                                    <input type="text" placeholder="Digite sua nacionalidade" required />
                                </div>
                                <div className="input-box">
                                    <label>Tipo sanguineo</label>
                                    <select name="sanguineo" id="sanguineo" required>
                                        <option value="a+">A+</option>
                                        <option value="a-">A-</option>
                                        <option value="b+">B+</option>
                                        <option value="b-">B-</option>
                                        <option value="ab+">AB+</option>
                                        <option value="ab-">AB-</option>
                                        <option value="o+">O+</option>
                                        <option value="o-">O-</option>
                                    </select>
                                    <div className="input-box">
                                        <label>raça</label>
                                        <select name="raca" id="raca" required>
                                            <option value="Branca">Branca</option>
                                            <option value="Parda">Parda</option>
                                            <option value="Negra">Negra</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label>Nome para contato</label>
                                    <input type="text" name="contatonm" id="" placeholder="Nome para contato" required />
                                </div>
                                <div className="input-box">
                                    <label>Telefone para contato</label>
                                    <input type="tel" name="tel" id="" placeholder="Sem ddd" required />
                                </div>
                                <div className="input-box">
                                    <label>DDD</label>
                                    <input type="text" name="ddd" id="" placeholder="seu DDD" required />
                                </div>
                                <div className="input-box">
                                    <label>DDI</label>
                                    <input type="text" name="ddi" id="" placeholder="seu DDI" required />
                                </div>
                                <div className="input-box">
                                    <label>Email para contato</label>
                                    <input type="text" name="email" id="" placeholder="Email de contato" required />
                                </div>

                                <div className="input-box">
                                    <label>Estado</label>
                                    <input type="text" name="estado" id="" placeholder="Estado" required />
                                </div>
                                <div className="input-box">
                                    <label>Cep</label>
                                    <input type="text" name="cep" id="" placeholder="Cep" required />
                                </div>
                                <div className="input-box">
                                    <label>Cidade</label>
                                    <input type="text" name="cidade" id="" placeholder="Cidade" required />
                                </div>
                                <div className="input-box">
                                    <label>Logradouro</label>
                                    <input type="text" name="logradouro" id="" placeholder="Logradouro" required />
                                </div>
                                <div className="input-box">
                                    <label>Numero</label>
                                    <input type="text" name="numero" id="" placeholder="Numero" required />
                                </div>
                                <div className="input-box">
                                    <label>Pais</label>
                                    <input type="text" name="pais" id="" placeholder="País" required />
                                </div>
                            </div>
                            <button>Enviar Cadastro</button>
                        </form>
                    </div>
                </div>
            </DivRegistro>
        </DivBody>
    )
}