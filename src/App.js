import { useEffect, useState } from 'react';
import Banner from './Componentes/Banner';
import { v4 as uuidv4 } from 'uuid';
import Formulario from './Componentes/Formulario';
import Setor from './Componentes/Setor';

function App() {
  const [funcionarioCadastrado,setFuncionarioCadastrado] = useState([])

  const [setores, setSetor] = useState([])

    useEffect(()=>{
      fetch('https://controle-api.azurewebsites.net/Funcionario', {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
    },
    })
    .then(resp=>resp.json())
    .then((data)=>{
      setFuncionarioCadastrado(data)
    })
    .catch((error)=>console.log(error))
    },[])

    useEffect(()=>{
      fetch('https://controle-api.azurewebsites.net/Setor', {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
    },
    })
    .then(resp=>resp.json())
    .then((data)=>{
      setSetor(data)
    })
    .catch((error)=>console.log(error))
    },[])


    function createSetorPost(setor){
      fetch('https://controle-api.azurewebsites.net/Setor',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(setor)
      })
      .catch((err)=>console.log(err))
    }

    function createFuncionarioPost(funcionario){
      fetch('https://controle-api.azurewebsites.net/Funcionario',{
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(funcionario)
      }
      )
      .catch((err)=>console.log(err))
    }
    function procuraSetorId(nomeSetor){
      const setor = setores.find(setor=>setor.nome===nomeSetor)
      return setor.setorId
    }

  const aoNovoFuncionarioAdicionado = (funcionario) =>{
    const newFunc={
      funcionarioId:funcionario.funcionarioId,
      nome:funcionario.nome,
      dataDeNascimento:funcionario.dataDeNascimento,
      dataDeContratacao:funcionario.dataDeContratacao,
      setor:{
        nome:funcionario.setorId
      }
    }
    const id = procuraSetorId(funcionario.setor)
    const newFuncPost={
      nome:funcionario.nome,
      dataDeNascimento:funcionario.dataDeNascimento,
      dataDeContratacao:funcionario.dataDeContratacao,
      setorId:id
    }
    createFuncionarioPost(newFuncPost)
    setFuncionarioCadastrado
    ([...funcionarioCadastrado,newFunc])
  }

  function deletarColaborador(id){
    setFuncionarioCadastrado(funcionarioCadastrado.filter(funcionario=>funcionario.funcionarioId !== id))
  }

  function mudarCorFuncionario(cor,id){
    setSetor(setores.map(setor=>{
      if(setor.setorId === id){
        setor.cor=cor
      }
      return setor;
    }))
  }
  
  function ponto(id,tipo){
    fetch(`https://controle-api.azurewebsites.net/Ponto/${tipo}?FuncionarioId=${id}`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },

    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  function baterPonto(id,tipo){
    ponto(id,tipo)
  }

  function aoSetorAdicionado(setor){
    const setorPost={
      nome:setor.nomeSetor,
      cor:setor.cor
    }
    createSetorPost(setorPost)
    setSetor([...setores,setor])
  }


  return (
    <div className="App">
      <Banner />
      <Formulario 
        setores={setores} 
        aoFuncionarioAdicionado={
          funcionario => aoNovoFuncionarioAdicionado(funcionario)}
        newSetor={
          setor => aoSetorAdicionado(setor)
        }
      />
      {setores.map(setor=>
        <Setor 
          key={setor.setorId}
          id={setor.setorId}
          cor={setor.cor}
          mudarCor={mudarCorFuncionario} 
          nome={setor.nome}
          ponto={baterPonto}
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
