import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Formulario = (props) =>{
    const [nome, setNome] = useState('')
    const [dataDeNascimento, setData] = useState('')
    const [urlGit, setUrlGit] = useState('')
    const [dataDeContratacao, setDataContratacao] = useState('')
    const [setor, setSetor] = useState({nome:""});
    const [cor, setCor] = useState('#ffffff')
    const [nomeSetor, setNomeSetor] = useState("");


    const aoSalvar =(evento) => {
        evento.preventDefault()
        console.log(urlGit)
        props.aoFuncionarioAdicionado({
            funcionarioId:uuidv4(),
            nome,
            urlGit:`${urlGit}.png`,
            dataDeNascimento,
            dataDeContratacao,
            setor
        })
    }
    const aoSalvarSetor =(evento) => {
        evento.preventDefault()
        props.newSetor({
            setorId:uuidv4(),
            nomeSetor,
            cor
        })
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do funcionário</h2>
                <CampoTexto required={true}
                label="Nome"
                placeholder="Digite o nome do funcionário"
                valor={nome}
                aoAlterado={valor =>setNome(valor)}

                />
                <CampoTexto required={true}
                label="Url GitHub"
                placeholder="Digite a url do seu github"
                valor={urlGit}
                aoAlterado={valor =>setUrlGit(valor)}

                />
                <CampoTexto 
                required={true} 
                label="Data De Nascimento" 
                tipo="date"
                valor={dataDeNascimento}
                aoAlterado={valor => setData(valor)}
                />
                <CampoTexto 
                required={true} 
                label="Data De Contratação" 
                tipo="date"
                valor={dataDeContratacao}
                aoAlterado={valor => setDataContratacao(valor)}

                />
                <ListaSuspensa
                 label="Setor"
                 itens={props.setores}
                 valor={setor.nome}
                 aoAlterado={valor => setSetor(valor)}
                 />
                <Botao>
                    Adicionar
                </Botao>
            </form>
            <form onSubmit={aoSalvarSetor}>
                <h2>Preencha o nome do setor</h2>
                <CampoTexto required={true}
                label="Nome"
                placeholder="Digite o nome do setor"
                valor={nomeSetor}
                aoAlterado={(valor) =>setNomeSetor(valor)}

                />
                <CampoTexto required={true}
                label="Cor"
                placeholder="Digite a cor em hexadecimal"
                tipo="color"
                valor={cor}
                aoAlterado={valor =>setCor(valor)}

                />
                
                <Botao>
                    Adicionar
                </Botao>
            </form>
        </section>
    )
}
export default Formulario