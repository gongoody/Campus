import useFetch from '../../Hooks/useFetch'
import NavBar from "../NavBar/NavBar";
import './Characters.css'

export default function Characters(){
    const [data] = useFetch('http://localhost:5000/users')
    
    return(
        <div>
            <NavBar/>
            <div className='characters-wrapper'>
            {data?  
                data.map((character) => {
                    return <h1 key={character._id} className='character-name'>{character.username}</h1>
                })
                : <h1>Error al cargar la base de datos</h1>
            }
            </div>
        </div>
    )
}