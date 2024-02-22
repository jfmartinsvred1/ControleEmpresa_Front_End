import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

function App() {
  const [funcionarioCadastrado,setFuncionarioCadastrado]=useState([])

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    console.log(funcionario)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoFuncionarioAdicionado={funcionario => aoNovoFuncionarioAdicionado(funcionario)} />

    </div>
  );
}

export default App;
