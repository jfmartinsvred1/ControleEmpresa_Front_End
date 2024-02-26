import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Setor from './Componentes/Setor';

function App() {
  const [funcionarioCadastrado,setFuncionarioCadastrado] = useState([])

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    setFuncionarioCadastrado
    ([...funcionarioCadastrado,funcionario])
  }

  const [setores, setSetor] = useState( [
    {
      nome: 'TI',
      cor:'#82CFFA'
    },
    {
      nome: 'ENGENHARIA',
      cor:'#E06B69'
    },
    {
      nome: 'RECURSOS HUMANOS',
      cor:'#57C278'
    },
    {
      nome: 'DESIGN',
      cor:'#DB6EBF'
    },
  ])

  function deletarColaborador(){
    console.log('deletar colaborador');
  }

  function mudarCorFuncionario(cor,nome){
    setSetor(setores.map(setor=>{
      if(setor.nome === nome){
        setor.cor=cor
      }
      return setor;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        setores={setores.map(setor => setor.nome)} 
        aoFuncionarioAdicionado={
          funcionario => aoNovoFuncionarioAdicionado(funcionario)}
      />
      {setores.map(setor=>
        <Setor 
          key={setor.nome}
          cor={setor.cor}
          mudarCor={mudarCorFuncionario} 
          nome={setor.nome}
          funcionarios = {
            funcionarioCadastrado.filter(
              funcionario => funcionario.setor === setor.nome
            )
          }
          aoDeletar={deletarColaborador}
        />
      )}
    </div>
  );
}

export default App;
