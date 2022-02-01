import React, { Component } from "react";
import "./Item.css";
import icecream from "../../assets/img/icecream.png";
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

export default class Item extends Component {
  state = {
    cart: [],
    total: 0,
  };

  currencyOptions = {
    minimunFractionDigits: 2,
    maximunFractionDigits: 2,
  };

  add = (item) => {
    this.setState(state => ({
      cart: [...state.cart, item.name],
      total: state.total + item.price,
    }))
  }

  remove = (item) => {
    this.setState(state => {
        const cart = [...state.cart]
        let total = state.total
        if(cart.indexOf(item.name) !== -1){
            cart.splice(cart.indexOf(item.name), 1)
            total = total -item.price
        }
        return ({
        cart: cart,
        total: total,        
        })
    })
}

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions);
  }

  render() {
    return (
      <div className="wrapper-item">
        <div>Carrito de compras: {this.state.cart.length} items totales.</div>
        <div>Total: {this.getTotal()}</div>
        <div>
          {items.map((item) => (
            <div key={item.name}>
              <div className="item">
                <img alt={item.name} src={item.image}></img>
              </div>
              <div>
                <button onClick={() => this.add(item)}>Add</button>&nbsp;
                <button onClick={() => this.remove(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
