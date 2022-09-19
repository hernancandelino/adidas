import React, {useState} from 'react';
import './itemCount.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({producto}) => {
    const {listaProductos, agregarProducto, sumarPrecio, sumarCantidad} = useContext(CartContext);
    const [cantidadProducto, setCantidad] = useState(1);

    const aumentarCantidad = () => {
        if (cantidadProducto >= 0 && cantidadProducto < 10) {
            setCantidad(cantidadProducto + 1);
        }
    }
    const disminuirCantidad = () => {
        if (cantidadProducto > 0) {
            setCantidad(cantidadProducto - 1);
        }
    }
    const FinalizarCompra = () => {
        if (producto.cantidad > 0) {
            return (
                <Link to='/cart'>
                    <button>
                        Finalizar compra
                    </button>
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
                    setCantidad(1)
                    sumarCantidad(cantidad)
                    producto.cantidad = productoNuevo.cantidad
                }else {
                    const nuevaCantidad = productoComprado.cantidad + cantidad
                    productoComprado.cantidad = nuevaCantidad
                    const precioProducto = (cantidad * producto.price)
                    sumarPrecio(precioProducto)
                    sumarCantidad(cantidad)
                    setCantidad(1)
                    producto.cantidad = productoComprado.cantidad
                }
        }
    }
        IsInCart();
    }
    return (
        <div className='contador-container'>
            <div className="contador">
                <button onClick={aumentarCantidad}>+</button>
                <p>{cantidadProducto}</p>
                <button onClick={disminuirCantidad}>-</button>
            </div>
            <div className='carrito'>
                <button onClick={() => {onAdd(cantidadProducto)}}>Añadir al carrito</button>
                <p>{producto.cantidad}</p>
            </div>
            <div>
                <FinalizarCompra/>
            </div>
        </div>
    )
}

export default ItemCount;