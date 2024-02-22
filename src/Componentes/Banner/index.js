import './Banner.css'
import logo from '../../Images/Banner.jpg';
function Banner(){
    return(
        <header className="banner">
             <img src={logo} alt="minha imagem"/>
        </header>
    )
}

export default Banner