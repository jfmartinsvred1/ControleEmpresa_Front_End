import './Formulario.css';
import CampoTexto from '../CampoTexto';
const Formulario = () =>{
    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do funcionário</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do funcionário"/>
                <CampoTexto label="Data De Nascimento" tipo="date"/>
                <CampoTexto label="Data De Contratação" tipo="date"/>
            </form>
        </section>
    )
}
export default Formulario