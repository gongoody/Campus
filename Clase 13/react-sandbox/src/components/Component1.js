import {useState, createContext, useContext} from 'react'

const UserContext = createContext()


function Component1(){
    const [user, setUser] = useState('Homero Simpson')
    
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hola ${user}`}</h1>
            <Component2 user={user}></Component2>
        </UserContext.Provider>
    )
}

function Component2(){
    return (
        <div>
            <h1>Component2</h1>
            <Component3/>
        </div>
    )
}

function Component3(){
    return (
        <div>
            <h1>Component3</h1>
            <Component4/>
        </div>
    )
}

function Component4(){
    return (
        <div>
            <h1>Component4</h1>
            <Component5/>
        </div>
    )
}

function Component5(){
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Component5</h1>
            <h2>{`Hola de nuevo ${user}`}</h2>
        </div>
    )
}

export default Component1