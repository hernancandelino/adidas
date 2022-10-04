import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartWidgetContainer.css'

export const CartWidgetContainer = () => {
  const {listaProductos, eliminarProducto, clearProductos, precioCarrito, cantidadCarrito} = useContext(CartContext);

  const BotonesProductos = () => {
      if (listaProductos.length !== 0) {
        return (
            <>
              <div className='boton-interactivo'>
                <p>➞</p>
                <button onClick={()=>clearProductos()}>ELIMINAR PRODUCTOS</button>
              </div>
              <Link className='boton-interactivo' to='/checkout'>
                <p>➞</p>      
                <button>IR A PAGAR</button>
              </Link>
            </>
        )
      }
  }
  const MostrarProductos = () => {
      return (
          listaProductos.map(producto=>(
            <div className='productos-carrito'>
              <div className='imagen-producto'>
                <img src={producto.pictureUrlGrande} alt={producto.title}></img>
              </div>
              <div className='detalle-producto'>
                <p>{producto.title}</p>
                <p>{producto.color1} / {producto.color2}</p>
                <p>{producto.cantidad}</p>
              </div>
              <div className='precio-producto'>
                <p>$ {producto.price * producto.cantidad}</p>
              </div>
              <div className='eliminar-producto'>
                <button onClick={()=>eliminarProducto(producto.id)}>X</button>
              </div>
            </div>
          ))
      )
    }
  const TotalProductos = () => {
    if (cantidadCarrito === 1) {
      return (
      <>      
        <div className='encabezado-carrito'>
          <h2>TU CARRITO</h2>
          <p>TOTAL ({cantidadCarrito} producto) <b>${precioCarrito}</b></p>
          <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
        </div>
        <div className='cuotas'>
          <h3>¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS!</h3>
          <p>Podés pagar con tus tarjetas Visa, MasterCard o American Express, al hacerlo, podrás pagar hasta en 6 cuotas sin interés.</p>
        </div>
      </>
      )
    } if (cantidadCarrito > 1) {
      return (
        <>
          <div className='encabezado-carrito'>
            <h2>TU CARRITO</h2>
            <p>TOTAL ({cantidadCarrito} productos) <b>${precioCarrito}</b></p>
            <p>Los artículos en tu carrito no están reservados. Terminá el proceso de compra ahora para hacerte con ellos.</p>
          </div>
          <div className='cuotas'>
            <h3>¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS!</h3>
            <p>Podés pagar con tus tarjetas Visa, MasterCard o American Express, al hacerlo, podrás pagar hasta en 6 cuotas sin interés.</p>
          </div>
        </>
      )
    }
  }
  const ResumenPedido = () => {
    if (cantidadCarrito === 1) {
      return (
      <>
        <h3 className='titulo-pedido'>RESUMEN DEL PEDIDO</h3>
        <div className='div-pedido'>
          <p>{cantidadCarrito} PRODUCTO</p><p>$ {precioCarrito}</p>
        </div>
        <div className='div-pedido'>
          <p>ENTREGA</p><p>$ 599</p>
        </div>
        <div className='div-pedido'>
          <b>TOTAL</b><b>{Number(precioCarrito + 599)}</b>
        </div>
      </>
      )
    } if (cantidadCarrito > 1) {
      return (
        <>        
          <h3 className='titulo-pedido'>RESUMEN DEL PEDIDO</h3>
          <div className='div-pedido'>
            <p>{cantidadCarrito} PRODUCTOS</p><p>$ {precioCarrito}</p>
          </div>
          <div className='div-pedido'>
            <p>ENTREGA</p><p>$ 599</p>
          </div>
          <div className='div-pedido'>
            <b>TOTAL</b><b>$ {Number(precioCarrito + 599)}</b>
          </div>
        </>
      )
    }
  }
  if (listaProductos.length > 0) {
  return (
  <div className='carrito-container'>
    <div className='carrito-1'>
      <TotalProductos/>
      <div>
        {<MostrarProductos/>}
      </div>
    </div>
    <div className='carrito-2'>
      <div className='botones-compra'>
        {<BotonesProductos/>}
      </div>
      <div className='resumen-pedido'>
        <ResumenPedido/>
      </div>
    </div>
  </div>
  )
  } else {
    return (
      <div className='carrito-vacio'>      
        <h2>EL CARRITO ESTA VACÍO</h2>
        <p>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</p>
        <Link className='boton-interactivo' to='/'>
          <p>➞</p>      
          <button>EMPEZAR</button>
        </Link>
      </div>
    )
  }
}