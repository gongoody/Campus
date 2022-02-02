import useFetch from '../../Hooks/useFetch'
import NavBar from "../NavBar/NavBar";
import './Messages.css'

export default function Messages(){
    const [dataMessages] = useFetch('http://localhost:5000/messages')
    const [dataCharacters] = useFetch('http://localhost:5000/users')

    return(
        <div>
            <NavBar/>
            <div className='messages-wrapper'>
            {(dataMessages && dataCharacters) &&
                dataMessages.map((message) => {
                    return (
                        <div key={message._id} className='message-character-container'>
                            {dataCharacters.map((character)=>{
                                if(character._id === message.user){
                                    return <h1 key={character._id} className='character-message-name'>{character.username}</h1>
                                }
                            })}
                            <h2>Ha dicho: </h2>
                            <h2 key={message._id} className='message-text'>"{message.text}"</h2>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}