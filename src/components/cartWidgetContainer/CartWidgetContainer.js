import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

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
  const MostrarProductos = () => {
    if (listaProductos.length > 0) {
      return (
          listaProductos.map(producto=>(
            <div>
              <p>{producto.title}</p>
              <p>${producto.price * producto.cantidad}</p>
              <img src={producto.pictureUrl} alt={producto.title}></img>
              <p>{producto.cantidad}</p>
              <button onClick={()=>eliminarProducto(producto.id)}>Eliminar producto</button>
            </div>
          ))
      )
    } else {
      return (
        <div>
          <p>
            Usted no tiene productos en el carrito.
          </p>
          <Link to='/'>          
            <button>
              Ir a realizar una compra
            </button>
          </Link>
        </div>
      )
    }
  }

  return (

    <div>
      <p>
        {precioCarrito}
      </p>
    <div>

      </div>
      {<MostrarProductos/>}
      {<EliminarProductos/>}
    </div>
  )
}