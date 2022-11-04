import React from "react";
import banner from "../../img/banner1copy.jpg"
import { DivBanner, DivMain } from "../../style/styled";
import Cards from "./Cards";
import Proposta from "./Proposta";
import Solution from "./Solution";

export default function Home() {
    return(
        <div>
        <DivMain>
        <DivBanner>
        <div className="banner">
            <img src={banner} alt="" />
            <div className="texto">

            <h1 >SAFE CAR</h1>
            <p>Utilizando da tecnologia para um mundo melhor</p>
            </div>
        </div>
        </DivBanner>
        <Solution/>
        <Proposta/>
        <Cards/>
        </DivMain>
        </div>
        
    )
}