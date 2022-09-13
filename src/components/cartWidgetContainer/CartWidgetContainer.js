import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidgetContainer = () => {
  const {listaProductos, eliminarProducto} = useContext(CartContext);

  return (
    <div>
      <p>CartContainer</p>
      {
        listaProductos.map(producto=>(
          <div>
            <p>{producto.title}</p>
            <p>{producto.price}</p>
            <p>{producto.cantidad}</p>
            <button onClick={()=>eliminarProducto(producto.id)}>Eliminar producto</button>
          </div>
        ))
      }
    </div>
  )
}