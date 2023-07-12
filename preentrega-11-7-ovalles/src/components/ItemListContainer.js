import React from 'react';

const productos = [
  { id: 1, nombre: 'Producto1', imagen: 'imagen1.jpg', precio: 2000 },
  { id: 2, nombre: 'Producto2', imagen: 'imagen2.jpg', precio: 3000 },
  { id: 3, nombre: 'Producto3', imagen: 'imagen3.jpg', precio: 4000 },
];

const ItemListContainer = () => {
  return (
    <div>
      <h2>Lista de productos</h2>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt={producto.nombre} />
          <p>Precio: {producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
