import React, {useReducer} from "react"
import "./Item.css"
import icecream from "../../assets/img/icecream.png"
import cake from "../../assets/img/cake.png";
import candy from "../../assets/img/candy.png";

const items = [
  {
    image: icecream,
    name: "helado",
    price: 80,
  },
  {
    image: cake,
    name: "torta",
    price: 150,
  },
  {
    image: candy,
    name: "caramelo",
    price: 10,
  },
];

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}

function cartReducer(state, action) {
  switch(action.type) {
      case 'add':
          return [...state, action.name]
      case 'remove':
          const update = [...state]
          if(update.indexOf(action.name) !== -1) {
              update.splice(update.indexOf(action.name), 1)
          }
          return update    
      default:
          return state
  }
}

function totalReducer(state, action) {
  if(action.type === 'add') {
      return state + action.price
  } else if(action.type === 'remove' && state > 0) {
    return state - action.price
  }
}

export default function Item(){

  const [cart, setCart] = useReducer(cartReducer, [])
  const [total, setTotal] = useReducer(totalReducer, 0)

  function getTotal() {
      return total.toLocaleString(undefined, currencyOptions)
  }

  function add(item) {
      const {name, price} = item
      setCart({name, type: 'add'})
      setTotal({price, type: 'add'})
  }

  function remove(item) {
      const {name, price} = item
      setCart({name, type: 'remove'})
      setTotal({price, type: 'remove'})
  }

  return(
      <div className='wrapper-item'>
          <div>
              Carrito de compras: {cart.length} items totales.
          </div>
          <div>Total: {getTotal()}</div>
          <div>
              {items.map(item => (
                  <div key={item.name}>
                      <div className='item'>
                          <img alt={item.name} src={item.image}></img>
                      </div>
                      <div>
                          <button onClick={() => add(item)}>Add</button>&nbsp;
                          <button onClick={() => remove(item)}>Remove</button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

