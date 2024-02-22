import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
const Formulario = () =>{
    const setores =['TI','ENGENHARIA','RECURSOS HUMANOS','DESIGN']

    const aoSalvar =(evento) => {
        evento.preventDefault()
        console.log("submetido")
    }
    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do funcionário</h2>
                <CampoTexto required={true} label="Nome" placeholder="Digite o nome do funcionário"/>
                <CampoTexto required={true} label="Data De Nascimento" tipo="date"/>
                <CampoTexto required={true} label="Data De Contratação" tipo="date"/>
                <ListaSuspensa label="Setor" itens={setores}/>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        </section>
    )
}
export default Formulario