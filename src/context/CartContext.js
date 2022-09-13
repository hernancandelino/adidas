import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [listaProductos, setlistaProductos] = useState([]);

    
    const agregarProducto = (producto)=>{
            const listaProducto = [...listaProductos,producto];
            setlistaProductos(listaProducto)
        }

    const eliminarProducto = (idProducto)=>{
        const copiaArray = [...listaProductos];
        const nuevosProductos = copiaArray.filter(elm=>elm.id !== idProducto);
        setlistaProductos(nuevosProductos);
    }

    return(
        <CartContext.Provider value={{listaProductos, agregarProducto, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}