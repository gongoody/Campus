import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'

export default function Product({
    name,
    emoji,
    stock,
    price,
    variety,
    info,
    showInfo
}) {
    return (
        <div className='product-wrapper'>
            <h2>{emoji} {name}</h2>
            <h3>Stock del producto: {stock}</h3>
            <h3>Precio: ${price}</h3>
            <div>{variety.join(', ')}</div>
            <button onClick={() => showInfo(info)}>+ Info</button> 
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    variety: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: PropTypes.shape({
        uses: PropTypes.string,
        wiki: PropTypes.string
    }),
    showInfo: PropTypes.func.isRequired
}

Product.defaultProps = {
    info: {
        info: 'No hay información adicional'
    }
}