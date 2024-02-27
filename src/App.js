import { useState } from 'react';
import Banner from './Componentes/Banner';
import { v4 as uuidv4 } from 'uuid';
import Formulario from './Componentes/Formulario';
import Setor from './Componentes/Setor';

function App() {
  const [funcionarioCadastrado,setFuncionarioCadastrado] = useState([])

  const retornaFuncionarios = () =>{
    fetch('https://localhost:7128/Funcionario', {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
    },
  }).then(resp=>resp.json())
  .then((data)=>{
    setFuncionarioCadastrado(data)
  })

  }
  

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    retornaFuncionarios()
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
    setFuncionarioCadastrado(funcionarioCadastrado.filter(funcionario=>funcionario.funcionarioId !== id))
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
              funcionario => funcionario.setor.nome === setor.nome
            )
          }
          aoDeletar={deletarColaborador}
        />
      )}
    </div>
  );
}

export default App;
