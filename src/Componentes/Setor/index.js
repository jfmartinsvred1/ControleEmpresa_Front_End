import Funcionario from '../Funcionario'
import './Setor.css'

const Setor = (props) => {
    
    return (
        <section className='setor' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <Funcionario />
        </section>
    )
}

export default Setor