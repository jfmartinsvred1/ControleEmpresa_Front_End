import Funcionario from '../Funcionario'
import './Setor.css'

const Setor = (props) => {
    
    return (
        (props.funcionarios.length > 0) && <section className='setor' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='funcionarios'>
            {props.funcionarios.map(funcionario => <Funcionario
            key={funcionario.nome} 
            nome={funcionario.nome}
            corDeFundo={props.corPrimaria}
            setor={funcionario.setor}
             />)}
            </div>
        </section>
    )
}

export default Setor