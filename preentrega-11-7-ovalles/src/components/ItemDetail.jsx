import React from 'react'
import ItemCount from './ItemCount'



const onAdd = (cantidad) => {
    console.log (`compraste ${cantidad} productos`)
  }

const ItemDetail = ({producto}) => {
  return (
    <div className='d-flex flex-column align-items-center'>

        <h3>{producto.name}</h3>
        <img src={producto.img}  alt={producto.name} />
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail