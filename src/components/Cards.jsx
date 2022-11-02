import React from "react";
import machinel from "../img/machinel.jpg"
import seguranca from "../img/seguranca.webp"
import banner3 from "../img/eficiencas.jpg"


import { DivCards } from "../style/styled";


export default function Cards() {
    return (
        <div>

        <DivCards>
            <div className="cards">
                <div>

                    <h1>Segurança</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eos odit quaerat doloremque, rem officia quos voluptas consectetur. Ratione cupiditate repudiandae debitis animi voluptatem suscipit incidunt aliquid inventore repellendus dolore.</p>
                </div>
                <img src={seguranca} alt="" />
            </div>

            
        </DivCards>
        <DivCards>
            <div className="cards">
                <div>
                    <h1>Conforto</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eos odit quaerat doloremque, rem officia quos voluptas consectetur. Ratione cupiditate repudiandae debitis animi voluptatem suscipit incidunt aliquid inventore repellendus dolore.</p>
                </div>
                <img src={banner3} alt="" />
            </div>
        </DivCards>
        <DivCards>
            <div className="cards">
                <div>
                    <h1>Tecnologia</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eos odit quaerat doloremque, rem officia quos voluptas consectetur. Ratione cupiditate repudiandae debitis animi voluptatem suscipit incidunt aliquid inventore repellendus dolore.</p>
                </div>
                <img src={machinel} alt="" />
            </div>
        </DivCards>
        </div>


    )
}