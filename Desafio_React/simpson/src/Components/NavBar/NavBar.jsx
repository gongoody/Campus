import { Link } from 'react-router-dom'
import Wikisimpson from '../../assets/img/logo-wikisimpson.png'
import './NavBar.css'

export default function NavBar(){
    return(
        <div className='navbar-container'>
            <Link to='/' className='wrapper'>
                <img src={Wikisimpson} alt='wikisimpson-logo' className='logo-navbar'></img>
                <h2>WikiSimpson</h2>
            </Link>
        </div>
    )
}