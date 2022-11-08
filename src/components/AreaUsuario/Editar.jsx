import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DivBody, DivUser } from "../../style/styled";
import Header from "../ComponentesEstaticos/Header";
import mc20  from "../../img/mc20.jpg" 
import hibrid from "../../img/hibrida.jpg"


export default function Editar() {
    
    let {id} = useParams()
    
    const [user, setUser] = useState({
        id: id,
        nome: "",
        profissao: "",
        raca: "",
        genero: "",
        nacionalidade: "",
        tpSanguineo: "",
        login: "",
        senha: "",
        idade: 0,
        salario: 0,
    })
    
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
  
    
    const handleSubmit = e => {
        e.preventDefault()
        sessionStorage.setItem("usuario", JSON.stringify(user))
        fetch(`http://localhost:8080/SafeCarApp/rest/usuario/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then((error)=> {
            console.log(error)
            
        }).then(()=> {
            window.location = "area-usuario"
        })


    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/SafeCarApp/rest/usuario/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then(data=>{
                setUser(data)
            })
        }
    },[id])





    return (
        <div>
            <Header />
            <DivBody>
                <DivUser>
                    <div className="container">
                        <div className="form-image">
                            <img src={hibrid} alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="title">

                                    <h1>Editar usuario</h1>
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
                                            placeholder="Digite sua idade"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Salario</label>
                                        <input type="text"
                                            name="salario"
                                            placeholder="Digite seu salario"
                                            required
                                            onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Genero</label>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-m" value="M" required onChange={handleChange} />
                                            <label form="sexo-m">Masculino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-f" value="F" required onChange={handleChange} />
                                            <label form="sexo-f">Feminino</label>
                                        </div>
                                        <div className="gender-input">
                                            <input type="radio" name="genero" id="sexo-any" value="I" required onChange={handleChange} />
                                            <label form="sexo-f">Prefiro não informar</label>
                                        </div>
                                    </div>
                                    <div className="input-box">
                                        <label>Nacionalidade</label>
                                        <input type="nacionalidade" name='nacionalidade' placeholder="Digite sua nacionalidade" required onChange={handleChange} />
                                    </div>
                                    <div className="input-box">
                                        <label>Tipo sanguineo</label>
                                        <select name="tpSanguineo" id="tpSanguineo" required onChange={handleChange}>
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

                                </div>
                                <button>Atualizar</button>
                            </form>
                        </div>
                    </div>
                </DivUser>
            </DivBody>
        </div>
    )







}