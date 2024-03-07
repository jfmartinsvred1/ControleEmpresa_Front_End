import Funcionario from '../Funcionario'
import hexToRgba from 'hex-to-rgba';
import './Setor.css'

const Setor = (props) => {
    
    return (
        (props.funcionarios.length > 0) && <section className='setor' style={{backgroundColor:hexToRgba(props.cor, "0.45")}}>
            <input onChange={e=>props.mudarCor(e.target.value, props.id)} type='color' value={props.cor} className='input-color'/>
            <h3 style={{borderColor:props.cor}}>{props.nome}</h3>
            <div className='funcionarios'>
            {props.funcionarios.map(funcionario => 
                {
                    return (
                        <Funcionario
                            baterPonto={props.ponto}
                            key={funcionario.funcionarioId}
                            id={funcionario.funcionarioId} 
                            nome={funcionario.nome}
                            urlGit={funcionario.urlGit}
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