import React, {useState} from 'react';
import './itemCount.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({producto}) => {
    const {listaProductos, agregarProducto, sumarPrecio, sumarCantidad} = useContext(CartContext);
    const [cantidadProducto, setCantidadProducto] = useState(1);

    const aumentarCantidad = () => {
        if (cantidadProducto >= 0 && cantidadProducto < 10) {
            setCantidadProducto(cantidadProducto + 1);
        }
    }
    const disminuirCantidad = () => {
        if (cantidadProducto > 0) {
            setCantidadProducto(cantidadProducto - 1);
        }
    }
    const FinalizarCompra = () => {
        if (producto.cantidad > 0) {
            return (
                <Link className='boton-interactivo' to='/cart'>
                    <p>➞</p>
                    <button>FINALIZAR COMPRA</button>
                </Link>
            )
        }
    }
    const onAdd = (cantidad)=>{
        const productoComprado = listaProductos.find(elm=>elm.id === producto.id);
        const IsInCart = ()=> {
            if (cantidad >= 1) {
                if (productoComprado === undefined) {
                    const productoNuevo={...producto, cantidad:cantidad}
                    agregarProducto(productoNuevo)  
                    const precioProducto = (productoNuevo.price * productoNuevo.cantidad)
                    sumarPrecio(precioProducto);
                    setCantidadProducto(1)
                    sumarCantidad(cantidad)
                }else {
                    const nuevaCantidad = productoComprado.cantidad + cantidad
                    productoComprado.cantidad = nuevaCantidad
                    const precioProducto = (cantidad * producto.price)
                    sumarPrecio(precioProducto)
                    sumarCantidad(cantidad)
                    setCantidadProducto(1)
                }
            }
        }
        IsInCart();
    }
    const asignarCantidad = () => {
        const productoComprado = listaProductos.find(elm=>elm.id === producto.id);
        if (productoComprado) {
            producto.cantidad = productoComprado.cantidad
        } else {
            producto.cantidad = 0
        }
    }
    asignarCantidad();
    const MostrarCantidad = () => {
        if (producto.cantidad === 0) {
            return (
            <div className='producto-carrito'>
                <p className='cantidad-producto'>Actualmente no posee unidades del producto en el carrito</p>
            </div>
            )
        } if (producto.cantidad === 1) {
            return (
                <div className='producto-carrito'>
                    <p className='cantidad-producto'>Actualmente en su carrito posee <b>{producto.cantidad}</b> unidad del producto</p>
                </div>
                )
        } else {
            return (
            <div className='producto-carrito'>
                <p className='cantidad-producto'>Actualmente en su carrito posee <b>{producto.cantidad}</b> unidades del producto</p>
            </div>
            )
        }
    }

    return (
        <div className='contador-container'>
            <MostrarCantidad/>
            <div className="contador">
                <button className='boton' onClick={aumentarCantidad}>+</button>
                <p>{cantidadProducto}</p>
                <button className='boton' onClick={disminuirCantidad}>-</button>
            </div>
            <div className='boton-interactivo'>
                <p>➞</p>
                <button onClick={() => {onAdd(cantidadProducto)}}>AÑADIR AL CARRITO</button>
            </div>
            <div>
                <FinalizarCompra/>
            </div>
        </div>
    )
}

export default ItemCount;