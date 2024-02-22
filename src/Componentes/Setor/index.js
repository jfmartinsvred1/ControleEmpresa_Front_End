import Funcionario from '../Funcionario'
import './Setor.css'

const Setor = (props) => {
    
    return (
        <section className='setor' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='funcionarios'>
            {props.funcionarios.map(funcionario => <Funcionario 
            nome={funcionario.nome}
            setor={funcionario.setor}
             />)}
            </div>
        </section>
    )
}

export default Setor