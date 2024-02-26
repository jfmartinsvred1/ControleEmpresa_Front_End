import './Funcionario.css'

const Funcionario  = (props) => {
    return (
        <div className='funcionario'>
            <div className='deletar' onClick={props.aoDeletar}> deletar </div>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img 
                    src='https://github.com/jfmartinsvred1.png'
                    alt='foto de perfil'
                />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.setor}</h5>
        </div>
        </div>
    )
}
export default Funcionario