import error from '../../assets/img/error.png'
import NavBar from "../NavBar/NavBar";
import './ErrorPage.css'

export default function ErrorPage(){
    return(
        <div>
            <NavBar/>
            <img src={error} className='doh' alt='doh error'/>
            <h1>Pagina no encontrada</h1>
        </div>
    )
}