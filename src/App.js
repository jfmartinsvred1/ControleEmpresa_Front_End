import { useState } from 'react';
import Banner from './Componentes/Banner';
import { v4 as uuidv4 } from 'uuid';
import Formulario from './Componentes/Formulario';
import Setor from './Componentes/Setor';

function App() {
  const funcionarios=[
    {
      id:uuidv4(),
      nome:"JOAO VICTOR",
      data:"2002-02-08",
      dataContratacao:"2002-02-08",
      setor:"TI"
    },
    {
      id:uuidv4(),
      nome:"JOAO VICTOR",
      data:"2002-02-08",
      dataContratacao:"2002-02-08",
      setor:"DESIGN"
    },
    {
      id:uuidv4(),
      nome:"JOAO VICTOR",
      data:"2002-02-08",
      dataContratacao:"2002-02-08",
      setor:"RECURSOS HUMANOS"
    },
    {
      id:uuidv4(),
      nome:"JOAO VICTOR",
      data:"2002-02-08",
      dataContratacao:"2002-02-08",
      setor:"ENGENHARIA"
    },

  ]
  const [funcionarioCadastrado,setFuncionarioCadastrado] = useState(funcionarios)

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    setFuncionarioCadastrado
    ([...funcionarioCadastrado,funcionario])
  }
  

  const [setores, setSetor] = useState( [
    {
      id:uuidv4(),
      nome: 'TI',
      cor:'#82CFFA'
    },
    {
      id:uuidv4(),
      nome: 'ENGENHARIA',
      cor:'#E06B69'
    },
    {
      id:uuidv4(),
      nome: 'RECURSOS HUMANOS',
      cor:'#57C278'
    },
    {
      id:uuidv4(),
      nome: 'DESIGN',
      cor:'#DB6EBF'
    },
  ])

  function deletarColaborador(id){
    setFuncionarioCadastrado(funcionarioCadastrado.filter(funcionario=>funcionario.id !== id))
  }

  function mudarCorFuncionario(cor,id){
    setSetor(setores.map(setor=>{
      if(setor.id === id){
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
          key={setor.id}
          id={setor.id}
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
