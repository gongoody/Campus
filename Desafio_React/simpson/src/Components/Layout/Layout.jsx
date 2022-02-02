import { Link } from 'react-router-dom'
import PersonajesImg from '../../assets/img/los-simpson-logo.png'
import FrasesImg from '../../assets/img/los-simpson-frases.png'
import './Layout.css'

export default function Layout(){
    return(
        <div className='wrapper-layout'>
            <Link to='/characters' className='layout-card'>
                    <h2>Personajes</h2>
                    <img src={PersonajesImg} alt='logo personajes' className='character-img'></img>
            </Link>
            <Link to='/messages' className='layout-card'>
                    <h2>Frases</h2>
                    <img src={FrasesImg} alt='logo mensajes' className='message-img'></img>
            </Link>
        </div>
    )
}