import React from "react";
import banner from "../../img/banner1copy.jpg"
import banner1 from "../../img/banner1.webp"


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