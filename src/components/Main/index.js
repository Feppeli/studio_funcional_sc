import React from 'react';
import logo from '../imgs/LOGOTIPO_SCSTUDIOFUNCIONALPNG02.png'
import '../Main/index.css'

const Main = () => {
    return(
        <main>
            <img src={logo} alt="."></img>

            <div>
                <h1>Domine seu <br/>corpo agora</h1>
                <p>Aprimore seus movimentos e tenha um corpo mais inteligente</p>
            </div>

            <a href='.'>Comece já</a>
        </main>
    )
}
export default Main;