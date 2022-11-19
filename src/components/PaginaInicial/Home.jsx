import React from "react";
import banner from "../../img/banner1copy.jpg"
import banner1 from "../../img/banner1.webp"
import banner2 from "../../img/interior.jpg"


import { DivBanner, DivMain } from "../../style/styled";
import styled from "styled-components";

import Cards from "./Cards";
import Proposta from "./Proposta";
import Solution from "./Solution";
import AreaUser from "../AreaUsuario/AreaUser";
import Header from "../ComponentesEstaticos/Header";
import mobile from "../../img/mobile.jpg"
import { useEffect } from "react";

export default function Home() {

    const DivAlign = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;

    @media screen and (max-width:  410px) {
        max-width: 410px;
        width: 410px;
        margin: 0;
        padding: 0;
        border: 0;
        
    }
    `





    return (
        <DivAlign>
            <Header />
            <DivMain>
                <DivBanner>
                    <div className="banner">
                        <picture>
                            <source media="(max-width:600px)" srcSet={mobile} />
                            <img src={banner2} alt="" />
                        </picture>

                    </div>
                </DivBanner>
                <Solution />
                <Proposta />
                <Cards/>
                
            </DivMain>
        </DivAlign>

    )
}