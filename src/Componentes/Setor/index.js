import Funcionario from '../Funcionario'
import hexToRgba from 'hex-to-rgba';
import './Setor.css'

const Setor = (props) => {
    
    return (
        (props.funcionarios.length > 0) && <section className='setor' style={{backgroundColor:hexToRgba(props.cor, "0.4")}}>
            <input value={props.cor} onChange={evento=> props.mudarCor(evento.target.value,props.nome)} type='color' className='input-color'/>
            <h3 style={{borderColor:props.cor}}>{props.nome}</h3>
            <div className='funcionarios'>
            {props.funcionarios.map(funcionario => 
                {
                    return (
                        <Funcionario
                            key={funcionario.nome} 
                            nome={funcionario.nome}
                            corDeFundo={props.cor}
                            setor={funcionario.setor}
                            aoDeletar={props.aoDeletar}
                        />
                    )
                }
            )}
            </div>
        </section>
    )
}

export default Setor