import Botao from '../Botao'
import { FaTrash } from "react-icons/fa";
import './Funcionario.css'
import { useState } from 'react';

const Funcionario  = (props) => {
    const [colorLixeira,setColorLixeira]=useState('black')

    return (
        <div className='funcionario'>
            <div className='deletar' onClick={()=>props.aoDeletar(props.id)}><FaTrash size={25} onMouseOver={()=>setColorLixeira('red')} onMouseOut={()=>setColorLixeira('black')}  style={{color:colorLixeira}}/></div>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img 
                    src={`${props.urlGit}`}
                    alt='foto de perfil'
                />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.setor.nome}</h5>
                <div className='botoes'>
                    <div onClick={()=>props.baterPonto(props.id,"Entrada")}>
                        <Botao className="botao">Entrada</Botao>
                    </div>
                    <div onClick={()=>props.baterPonto(props.id,"Saida")}>
                        <Botao className="botao">Saida</Botao>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Funcionario