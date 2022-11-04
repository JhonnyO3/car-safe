import React, { useState } from "react";
import registro from "../../img/registro.svg"
import { DivBody, DivRegistro } from "../../style/styled";


export default function Cadastro() {

    const [veiculo, setVeiculo] = useState({
        id: 0,
        nmVeiculo: "",
        tipo: "",
        cor: "",
        placa: "",
        modelo: "",
        dsVeiculo: "",
        tripulantes: 0
    })

    const [usuario, setUsuario] = useState({
        nome: "",
        profissao: "",
        raca: "",
        genero: "",
        nacionalidade: "",
        pSanguineo: "",
        login: "",
        senha: "",
        id: 0,
        idade: 0,
        salario: 0,
        enderecos: {
            id: 0 
        },
        contatos:  {
            id: 0
        },
        veiculo: {
            id: 0
        },
    })
    let metodo = "post"

    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }


    const handleSubmit = e => {
        e.preventDefault()
        
        fetch(`http://localhost:8080/SafeCarApp/rest/usuario`, {
            method: metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        }).then(()=> {
            console.log(usuario)
            sessionStorage.setItem("dados-usuario", JSON.stringify(usuario))
            window.location = "/area-usuario"
        })
    }


    return (
        <DivBody>
            <DivRegistro>
                <div className="container">
                    <div className="form-image">
                        <img src={registro} alt="" />
                    </div>
                    <div className="form">
                        <form  onSubmit={handleSubmit}>
                            <div className="title">

                                <h1>Cadastre-se</h1>
                            </div>
                            <div className="input-group">
                                <div className="input-box">
                                    <label>Nome Completo</label>
                                    <input type="text"
                                        name="nome"
                                        placeholder="Digite seu nome"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Login</label>
                                    <input type="text"
                                        name="login"
                                        placeholder="Digite seu Login"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Senha</label>
                                    <input type="password"
                                        name="senha"
                                        placeholder="Digite sua Senha"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Profissão</label>
                                    <input type="text"
                                        name="profissao"
                                        placeholder="Digite sua profissao"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Idade</label>
                                    <input type="text"
                                        name="idade"
                                        placeholder="Digite sua profissao"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Salario</label>
                                    <input type="text"
                                        name="salario"
                                        placeholder="Digite sua profissao"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Genero</label>
                                    <div className="gender-input">
                                        <input type="radio" name="genero" id="sexo-m" required onChange={handleChange} />
                                        <label form="sexo-m">Masculino</label>
                                    </div>
                                    <div className="gender-input">
                                        <input type="radio" name="genero" id="sexo-f" required onChange={handleChange} />
                                        <label form="sexo-f">Feminino</label>
                                    </div>
                                    <div className="gender-input">
                                        <input type="radio" name="genero" id="sexo-any" required onChange={handleChange} />
                                        <label form="sexo-f">Prefiro não informar</label>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label>Nacionalidade</label>
                                    <input type="nacionalidade" name='nacionalidade' placeholder="Digite sua nacionalidade" required  onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Tipo sanguineo</label>
                                    <select name="pSanguineo" id="sanguineo" required onChange={handleChange}>
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
                                        <select name="raca" id="raca" required onChange={handleChange}>
                                            <option value="Branca">Branca</option>
                                            <option value="Parda">Parda</option>
                                            <option value="Negra">Negra</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-box">
                                    <label>Nome para contato</label>
                                    <input type="text" name="contatonm" id="" placeholder="Nome para contato" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Telefone para contato</label>
                                    <input type="tel" name="tel" id="" placeholder="Sem ddd" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>DDD</label>
                                    <input type="text" name="ddd" id="" placeholder="seu DDD" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>DDI</label>
                                    <input type="text" name="ddi" id="" placeholder="seu DDI" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Email para contato</label>
                                    <input type="text" name="email" id="" placeholder="Email de contato" required onChange={handleChange}/>
                                </div>

                                <div className="input-box">
                                    <label>Estado</label>
                                    <input type="text" name="estado" id="" placeholder="Estado" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Cep</label>
                                    <input type="text" name="cep" id="" placeholder="Cep" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Cidade</label>
                                    <input type="text" name="cidade" id="" placeholder="Cidade" required onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Logradouro</label>
                                    <input type="text" name="logradouro" id="" placeholder="Logradouro" required onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Numero</label>
                                    <input type="text" name="numero" id="" placeholder="Numero" required  onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Pais</label>
                                    <input type="text" name="pais" id="" placeholder="País" required onChange={handleChange} />
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