import error from '../../assets/img/error.png'
import NavBar from "../NavBar/NavBar";
import './ErrorPage.css'

export default function ErrorPage(){
    return(
        <div>
            <NavBar/>
            <h1>La pagina a la que estas intentado entrar no se encuentra</h1>
            <img src={error}/>
        </div>
    )
}