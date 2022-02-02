import useFetch from './useFetch'

const Main = () =>{
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos')

    return(
        <div>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })
            }
        </div>
    )
}

export default Main

// const Main = () =>{
//     const [data, setData] = useState(null)

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(res => res.json())
//             .then(data => setData(data))
//     },[])

//     return(
//         <div>
//             {data &&
//                 data.map((item) => {
//                     return <p key={item.id}>{item.title}</p>
//                 })
//             }
//         </div>
//     )
// }

// export default Main