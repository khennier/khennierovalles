import React from 'react';
import useCart from './Cart/useCart';

function Cart() {
  const { products } = useCart();

  const handlePlaceOrder = () => {

  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            Cantidad: {product.cantidad}
          </li>
        ))}
      </ul>
      {products.length > 0 && (
        <button onClick={handlePlaceOrder}>Realizar Pedido</button>
      )}
    </div>
  );
}

export default Cart;
