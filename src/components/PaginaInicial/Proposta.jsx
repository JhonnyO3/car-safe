import React from "react";
import { DivProposta } from "../../style/styled";
import maserati from "../../img/maserati.png"
import ia from "../../img/ia.png"
import styled from "styled-components";


const DivWidth = styled.div`
@media screen and (max-width: 410px) {
max-width: 410px

}
`

export default function Proposta() {
    return (
        <DivWidth>
            <DivProposta>
                <div className="text">
                    <h1>Proposta de invervenção SafeCar</h1>
                    <p>A SafeCar juntamente em parceria com a Stellantis desenvolveu uma solução inovadora intervindo na problemática! Que atinge milhares de pessoas todos os anos!</p>
                    <p>Introduzimos um sistema de Inteligência Artificial que identifica se o piloto está “cochilando” ao volante, fazendo assim, uma serie de avisos para que o mesmo pare o carro e acorde</p> 
                    <p>e dependendo da situação serão acionadas ligações telefônicas para agentes superiores como policia, pronto socorro para intervirem antes de um possivel acidente</p>
                </div>
                <img src={maserati} alt="" />
            </DivProposta>
            <DivProposta>
                <div className="text">
                    <h1>Machine Learning / Inteligencia artificial</h1>
                    <p>Nosso sistema por meio de uma câmera acoplada no painel mapeia todas as expressões faciais do piloto, tendo assim tudo supervisionado pela máquina, e caso o piloto realize movimentos / expressões sonolentas, será identificado e os avisos serão disparados.</p>
                </div>
                <img src={ia} alt="" />
            </DivProposta>

        </DivWidth>
    )
}