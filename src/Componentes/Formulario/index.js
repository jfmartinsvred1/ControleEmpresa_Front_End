import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) =>{
    const [nome, setNome] = useState('')
    const [dataDeNascimento, setData] = useState('')
    const [dataDeContratacao, setDataContratacao] = useState('')
    const [setor, setSetor] = useState({});


    const aoSalvar =(evento) => {
        evento.preventDefault()
        props.aoFuncionarioAdicionado({
            nome,
            dataDeNascimento,
            dataDeContratacao,
            setor
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
        </section>
    )
}
export default Formulario