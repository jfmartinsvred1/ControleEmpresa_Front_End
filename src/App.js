import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Setor from './Componentes/Setor';

function App() {
  const [funcionarioCadastrado,setFuncionarioCadastrado]=useState([])

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    console.log(funcionario)
  }

  const setores = [
    {
      nome: 'TI',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'ENGENHARIA',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'RECURSOS HUMANOS',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'DESIGN',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario setores={setores.map(setor => setor.nome)} aoFuncionarioAdicionado={funcionario => aoNovoFuncionarioAdicionado(funcionario)} />
      {setores.map(setor=>
      <Setor 
      key={setor.nome}
      corPrimaria={setor.corPrimaria}
      corSecundaria={setor.corSecundaria} 
      nome={setor.nome}
      />
      )}
    </div>
  );
}

export default App;
