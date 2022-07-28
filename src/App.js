import './App.css';
import Loja from './components/Loja/Loja';
import Downloadsapp from './components/Downloadsapp/Downloadsapp';
import Main from './components/Main';
import Beneficios from './components/beneficios';
import Coach from './components/coach';
import TurmasAlunos from './components/turmasalunos';
import Sobre from './components/about';
import Contatos from './components/contatos';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Main />
      <Loja />
      <Beneficios />
      <Downloadsapp />
      <Coach />
      <TurmasAlunos />
      <Sobre />
      <Contatos />
      <Footer />
    </>
  );
}

export default App;
