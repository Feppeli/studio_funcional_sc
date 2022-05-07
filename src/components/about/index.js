import React from "react";
import '../about/index.css'
import AboutImg from '../imgs/AboutImg.png'

const Sobre = () => {
    return (
        <section id="about">
            <div>
                <img src={AboutImg} alt=''></img>
                <p>Atendendo com excelência e confinabilidade,
                    criânças adultos e idosos, entregando
                    bem-estar, saúde, autonomia, consciência corporal
                    e força. agregando mais tempo e qualidade de vida a você
                </p>
            </div>
        </section>
    )
}

export default Sobre;