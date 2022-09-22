import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { db } from '../../utils/datos'

export const CartWidgetContainer = () => {
  const {listaProductos, eliminarProducto, clearProductos, precioCarrito} = useContext(CartContext);

  const [idOrder, setIdOrder] = useState("");

  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone:e.target[1].value,
        email:e.target[2].value
      },
      items: listaProductos,
      total: precioCarrito
    }
    const queryRef = collection(db,"orders");
    addDoc(queryRef, order).then(respuesta=>setIdOrder(respuesta.id))
  }


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

  const MostrarId = () => {
    if (idOrder) {
      return (
        <div>
          Su numero de compra es {idOrder}
        </div>
      )
    }
  }

  return (
  <>
    <div>
      <p>
        {precioCarrito}
      </p>
    <div>

    </div>
      {<MostrarProductos/>}
      {<EliminarProductos/>}
    </div>

    <div>
      <form onSubmit={sendOrder}>
        <input type="text" placeholder='nombre'/>
        <input type="text" placeholder='telefono'/>
        <input type="email" placeholder='email'/>
        <button type='submit'>enviar orden</button>
      </form>
    </div>

    <MostrarId/>
  </>
  )
}