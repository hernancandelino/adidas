import { useState } from 'react';
import { collection, addDoc} from "firebase/firestore";
import { db } from '../../utils/datos'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './checkout.css'
import { Link } from 'react-router-dom';

export const Checkout = () => {
const {listaProductos, precioCarrito, clearProductos} = useContext(CartContext);
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
    clearProductos();
  }
    if (idOrder) {
      return (
        <>
          <div className='id-order'>
            <p>Su numero de compra es {idOrder}</p>
            <Link className='boton-interactivo' to='/'>
              <p>➞</p>
              <button>IR AL INICIO</button>
            </Link>
          </div>
        </>
        )
      } else {
    return (
    <>    
      <div className='checkout-container'>
        <form onSubmit={sendOrder}>
          <div className='div-input'>
            <h4>NOMBRE</h4>
            <input type="text" placeholder='Nombre'/>
          </div>
          <div className='div-input'>
            <h4>MAIL</h4>
            <input type="email" placeholder='Email'/>
          </div>
          <div className='div-input'>
            <h4>TELÉFONO</h4>
            <input type="text" placeholder='Telefono'/>
          </div>
          <div className='boton-interactivo'>
            <p>➞</p>
            <button type='submit'>ENVIAR ORDEN</button>
          </div>
        </form>
      </div>
    </>
    )
  }
}