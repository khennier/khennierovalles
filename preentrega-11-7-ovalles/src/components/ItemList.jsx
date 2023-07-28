import React from 'react'
import Item from './Item.jsx'

const ItemList = ({product}) => {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {product.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList