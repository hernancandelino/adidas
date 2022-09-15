import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidgetContainer = () => {
  const {listaProductos, eliminarProducto, clearProductos, precioCarrito} = useContext(CartContext);

  const EliminarProductos = () => {
      if (listaProductos.length !== 0) {
        return (
            <>
            <button onClick={()=>clearProductos()}>Eliminar Todos los productos</button>
            </>
        )
      }
  }

  return (

    <div>
      {precioCarrito}
    <div>

      </div>
      {
        listaProductos.map(producto=>(
          
          <div>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
            <img src={producto.pictureUrl} alt={producto.title}></img>
            <p>{producto.cantidad}</p>
            <button onClick={()=>eliminarProducto(producto.id)}>Eliminar producto</button>
          </div>
        ))
      }
      {<EliminarProductos/>}
    </div>
  )
}