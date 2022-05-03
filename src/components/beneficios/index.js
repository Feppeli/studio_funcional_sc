import React from 'react';
import Beneficio1 from '../imgs/beneficio 1.png'
import Beneficio2 from '../imgs/beneficio 2.png'
import Beneficio3 from '../imgs/beneficio 3.png'
import Beneficio4 from '../imgs/beneficio 4.png'
import '../beneficios/index.css'

const Beneficios = () => {
    return (
        <section id='beneficios'>
            <div>
                <img className='beneImg' src={Beneficio1} alt='.'></img>
                <h1 className='benefics'>Beneficio</h1>
                <p className='beneP'>Treinos cadenciados com carga trará mais força para as tarefas cotidianas!</p>
            </div>
            <div>
                <img className='beneImg' src={Beneficio2} alt='.'></img>
                <h1 className='benefics'>Beneficio</h1>
                <p className='beneP'>Com alta queima calórica o treino funcional lhe proporcional um corpo mais saudável.</p>
            </div>
            <div>
                <img className='beneImg' src={Beneficio3} alt='.'></img>
                <h1 className='benefics'>Beneficio</h1>
                <p className='beneP'>Diminui os riscos de doenças cardiovasculares, diabetes e aumenta o seu tempo de vida.</p>
            </div>
            <div>
                <img className='beneImg' src={Beneficio4} alt='.'></img>
                <h1 className='benefics'>Beneficio</h1>
                <p className='beneP'>Chega de pedir ajuda! Um corpo preparado te proporcionara mais autonomia no dia a dia.</p>
            </div>
        </section>
    )
}

export default Beneficios;