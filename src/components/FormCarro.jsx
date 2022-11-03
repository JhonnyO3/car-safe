import React, { useEffect, useState } from "react";
import { DivBody, DivRegistro } from "../style/styled";
import registro from "../img/eletrico2.svg"


export default function FormCarro() {

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
        
    let metodo = "post"

    const handleChange =e =>{
        setVeiculo({...veiculo, [e.target.name]:e.target.value})
        console.log(veiculo)
        console.log(setVeiculo)
    }

    /*const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(veiculo)
    }*/

    
    
    const handleSubmit = e => {
        e.preventDefault()
        
        fetch(`http://localhost:8080/SafeCarApp/rest/veiculo/cadastro-veiculo/`, {
            method: metodo,
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(veiculo)
        }).then(()=> {
            console.log(veiculo)
            window.location = "/usuario/cadastro-usuario"
        })
        
    }
    /*useEffect(()=> {
        const response =  fetch(
            `http://localhost:8080/SafeCarApp/rest/veiculo/listar/${veiculo.placa}`.then((resp)=> {
                return resp.json();
            }).then((resp)=> {
                setVeiculo(resp)
                console.log(resp)
            })
            
        )

    }, [])*/


    return (

        <DivBody>
            <DivRegistro>
                <div className="container">
                    <div className="form-image">
                        <img src={registro} alt="" />
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit} >
                            <div className="title">

                                <h1>Cadastro de Veículo</h1>
                            </div>
                            <div className="input-group">
                                <div className="input-box">
                                    <label>Nome veiculo</label>
                                    <input type="text"
                                        name="nmVeiculo"
                                        placeholder="Digite o nome do seu veiculo"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Tipo veiculo</label>
                                    <input type="text"
                                        name="tipo"
                                        placeholder="tipo de veiculo"
                                        required 
                                        onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>Dados cor</label>
                                    <input type="text"
                                        name="cor"
                                        placeholder="Digite a cor do veiculo"
                                        required 
                                        onChange={handleChange}/>
                                </div>
                                <div className="input-box">
                                    <label>quantidade de tripulantes</label>
                                    <label> 1 - 2 - 3 - 4 - 5</label>
                                    <input type="range" required name="tripulantes" id="" min="1" max="5" onChange={handleChange} />
                                    
                                </div>
                                <div className="input-box">
                                    <label>Placa Veículo</label>
                                    <input type="text"
                                        name="placa"
                                        placeholder="Digite a placa do veículo"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Modelo</label>
                                    <input type="text"
                                        name="modelo"
                                        placeholder="Modelo do Veículo"
                                        required
                                        onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <label>Descricao</label>
                                    <textarea name="dsVeiculo" required id="" cols="30" rows="10" onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <button>Enviar formulário</button>
                        </form>
                    </div>
                </div>
            </DivRegistro>
        </DivBody>

    )

}