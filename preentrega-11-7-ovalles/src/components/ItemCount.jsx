import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';



const ItemCount = ({ producto, stock, onAdd}) => {
    const [items, setItems]= useState(1)
     const sumarItem = () => {
        if(items < stock){
        setItems(items + 1)
        }
      }
      const restarItem = ()=>{
      if(items>0){
        setItems(items-1)
      }
    }
    
    return (
        <div className='d-flex flex-column align-items-center justify-content-between'>
        <div>
          <Button onClick={sumarItem}>+</Button>
          <span>{items}</span>
          <Button onClick={restarItem}>-</Button>
          <Button disabled={items ===0} onClick={()=>onAdd({...producto, cantidad: items})}>Agregar al carrito</Button>
        </div>
        </div>
    )
  }
  export default ItemCount 