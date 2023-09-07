import { useState } from "react"
import CartContext from "./cartContext"


function CartProvider({ defaultValue = [], children }) {
  const [products, setProducts] = useState(defaultValue)

  function onAdd(producto) {
    const newList = [...products]
    newList.push(producto)
    console.log("Carrito actualizado:", newList)

    setProducts(newList)
  }

  const valueProvided = {
    products,
    onAdd,
    cantidad: products.length
  }

  return (
  <CartContext.Provider value={valueProvided}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider;