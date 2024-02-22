import './CampoTexto.css'
const CampoTexto = (props) =>{
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.required} type={props.tipo} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto