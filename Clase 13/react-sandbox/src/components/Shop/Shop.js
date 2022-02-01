import React, {Component} from 'react'
import './Shop.css'

class Shop extends Component{
    constructor(props){
        super(props)
        this.state = {
            promotion: 'helados'
        }
        console.log('constructor...')
    }

    changePromotion = () => {
        console.log('changePromotion...')
        this.setState({promotion: '... buscando promociones'})
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps...')
    //     return {promotion: props.prom}
    // }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate...')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate...')
        document.getElementById('div1').innerHTML = 'La promocion anterior era: ' + prevState.promotion
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate...')
        document.getElementById('div2').innerHTML = 'La promocion anterior era: ' + this.state.promotion
    }

    render(){
        console.log('render...')
        return(
            <div className='wrapper-shop'>
                El articulo en promocion es: <b> {this.state.promotion}</b>
                <div id='div1'></div>
                <div id='div2'></div>
                <div>
                    <button onClick={this.changePromotion}>Buscar</button>
                </div>
            </div>
        )
    }
}

export default Shop

/*
FASE : MONTAJE

1. constructor()
2. getDerivedStateFromProps()
3. render()
4. componentDidMount()

FASE : ACTUALIZACION

1. getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate()

FASE: DESMONTAJE

1. componentWillUnmount

*/