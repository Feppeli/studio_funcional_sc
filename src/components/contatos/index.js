import React from "react";
import '../contatos/index.css'
import Telefone from '../imgs/phone-call.png'
import WhatsApp from '../imgs/whatsapp.png'
import Instagram from '../imgs/instagram.png'
import Local from '../imgs/placeholder.png'

const Contatos = () => {
    return(
        <section id="contatos">
            <h1>Contatos</h1>
            <div>
                <a  href="https://api.whatsapp.com/send?phone=5581999918795" target="_blank" className="contats" rel="noreferrer">
                    <img src={Telefone} alt=""></img>
                    <p>(81) 99991-8795</p>
                </a>
                <a   href="https://api.whatsapp.com/send?phone=5581999918795" target="_blank" className="contats" rel="noreferrer" >
                    <img src={WhatsApp} alt=""></img>
                    <p>(81) 99991-8795</p>
                </a>
                <a href="https://www.instagram.com/studiofuncional_sc/" target="_blank"  className="contats" rel="noreferrer">
                    <img src={Instagram} alt=""></img>
                    <p>@studioFuncional_sc</p>
                </a>
                <a href=".">
                    <img src={Local} alt=""></img>
                    <p>Lot. Rio Formoso 2<br/> Tamandaré-PE n°35</p>
                </a>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5581999918795" target="_blank" className="contats" rel="noreferrer">Comece já</a>
        </section>
    )
};

export default Contatos;