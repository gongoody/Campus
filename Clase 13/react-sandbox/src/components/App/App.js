import './App.css'
import data from './data'
import Product from '../Product/Product'
import Guide from '../Guide/Guide' 

function showInfo(info) {
  const alertInfo = Object.entries(info)
    .map(info => `${info[0]}: ${info[1]}`)
    .join('\n')
  alert(alertInfo)  
}

function App() {
  const shopName = 'La Verdulería de Homero'
  const display = true;
  return (
      <div className='container'>
        <h1 id='shopName'>{shopName}</h1>
        {display && <p>Abierto al público</p>}
        <Guide/>
        <div className="wrapper">
          {data.map(product => (
            <Product 
              key={product.name}
              name={product.name}
              emoji={product.emoji}
              stock={product.stock}
              price={product.price}
              variety={product.variety}
              info={product.info}
              showInfo={showInfo}
            />
          ))}
        </div>
      </div>   
  )
}

export default App;