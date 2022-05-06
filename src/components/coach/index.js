import React from 'react';
import Perfil from '../imgs/Capturar.jpeg'
import '../coach/index.css'

const Coach = () => {
    return(
        <section id="coach">
            <div>
                <h1>Coach</h1>
                <img src={Perfil} alt=""></img>

                <h2>Silvânia Cardoso</h2>
                <p>Te ajudo a viver sua <br/>melhor versão.<br/>
                    Bacharel e licenciatura<br/>
                    Esp. Educação Física com ênfase no handebol<br/>
                    Treinamento funcional<br/>
                    Avaliadora física<br/>
                    CREF:012375-G/PE
                </p>
            </div>
        </section>
    )
}

export default Coach;