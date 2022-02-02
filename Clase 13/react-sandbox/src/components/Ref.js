import {useState, useEffect, useRef} from 'react'

function Ref(){
    const [inputValue, setInputValue] = useState('')
    const count = useRef(0)

    useEffect(()=>{
        count.current = count.current + 1
    })
    return (
        <div>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Se ha renderizado {count.current} veces</h2>
        </div>
    )
}

export default Ref