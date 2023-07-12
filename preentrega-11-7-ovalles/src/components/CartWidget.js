import { useState } from "react";
import Button from 'react-bootstrap/Button';
function CartWidget(){
    const [items, setItems]= useState(0);

    const sumarItem = ()=>{
        setItems(items + 1)
    }
    const restarItem = ()=>{
        if(items>0){
            setItems(items-1)
        }
        else{
            setItems(items+0)
        }
    }
    return(
        <div>
        <div className="Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                    </svg> ITEMS: {items}
            </div>
        <div className="botones">
        <Button onClick={sumarItem}>AGREGAR ITEM AL CARRITO</Button>
        <Button onClick={restarItem}>QUITAR ITEM DEL CARRITO</Button>
        </div>
        </div>
    )
    
}
export default CartWidget