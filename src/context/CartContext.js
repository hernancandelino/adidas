import { createContext, useState } from "react";
import Datos from "../components/datos/Datos";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [listaProductos, setlistaProductos] = useState([]);
    const [precioCarrito, setprecioCarrito] = useState(0);
    const [cantidadCarrito, setCantidadProductos] = useState(0);
    
    const agregarProducto = (producto) =>{
        const listaProducto = [...listaProductos,producto];
        setlistaProductos(listaProducto)
    }
    const restarPrecio = (precio) => {
        const precioNuevo = precioCarrito - precio
        setprecioCarrito(precioNuevo)
    }
    const restarCantidad = (cantidad) => {
        const cantidadNueva = cantidadCarrito - cantidad
        setCantidadProductos(cantidadNueva)
    }
    const eliminarProducto = (idProducto) =>{
        const copiaArray = [...listaProductos];
        const nuevosProductos = copiaArray.filter(elm=>elm.id !== idProducto);
        setlistaProductos(nuevosProductos);
        const nuevoPrecio = copiaArray.filter(elm =>elm.id === idProducto)
        const productoEliminado = nuevoPrecio.find(elm=>elm.id === idProducto)
        const precioFinal = productoEliminado.price * productoEliminado.cantidad
        restarPrecio(precioFinal)
        restarCantidad(productoEliminado.cantidad)
        const filtroDatos = Datos.filter(elm=>elm.id === idProducto)
        const productoDatos = filtroDatos.find(elm=>elm.id === idProducto)
        productoDatos.cantidad = 0
    }
    const clearProductos = () => {
        setlistaProductos([])
        setprecioCarrito(0)
        Datos.forEach( (element) => {
            element.cantidad = 0
        });
        setCantidadProductos(0)
    }
    const sumarPrecio = (precio) => {
        const precioNuevo = precioCarrito + precio
        setprecioCarrito(precioNuevo)
    }
    const sumarCantidad = (cantidad) => {
        const nuevaCantidad = cantidadCarrito + cantidad
        setCantidadProductos(nuevaCantidad)
    }

    return(
        <CartContext.Provider value={{listaProductos, agregarProducto, eliminarProducto, clearProductos, sumarPrecio, precioCarrito, sumarCantidad, cantidadCarrito}}>
            {children}
        </CartContext.Provider>
    )
}