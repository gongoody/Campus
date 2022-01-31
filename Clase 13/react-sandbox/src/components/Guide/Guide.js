import './Guide.css'
import homer from '../../assets/img/homer.png'

// export default class Guide extends Component{
//     render(){
//         return(
//             <div className='guide'>
//                 <img alt='Homero Simpson' src={homer}></img>
//                 <p>Selecione el producto para obtener mas detalles</p>
//             </div>
//         )
//     }
// }
export default function Guide(){
        return(
            <div className='guide'>
                <img alt='Homero Simpson' src={homer}></img>
                <p>Selecione el producto para obtener mas detalles</p>
            </div>
        )
}