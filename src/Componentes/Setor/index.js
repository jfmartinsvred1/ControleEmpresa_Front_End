import './Setor.css'

const Setor = (props) => {
    
    return (
        <section className='setor' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Setor