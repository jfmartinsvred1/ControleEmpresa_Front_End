import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
const Formulario = (props) =>{
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [dataContratacao, setDataContratacao] = useState('')
    const [setor, setSetor] = useState('');

    const aoSalvar =(evento) => {
        evento.preventDefault()
        props.aoFuncionarioAdicionado({
            nome,
            data,
            dataContratacao,
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
                valor={data}
                aoAlterado={valor => setData(valor)}
                />
                <CampoTexto 
                required={true} 
                label="Data De Contratação" 
                tipo="date"
                valor={dataContratacao}
                aoAlterado={valor => setDataContratacao(valor)}

                />
                <ListaSuspensa 
                label="Setor"
                 itens={props.setores}
                 valor={setor}
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