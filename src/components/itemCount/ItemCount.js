import React, {useState} from 'react';
import './itemCount.css'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0);

    const aumentarCantidad = () => {
        if (cantidad >= 0 && cantidad < 10) {
            setCantidad(cantidad + 1);
        }
    }
    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }
    const resetearCantidad = () => {
        setCantidad(0)
    }
    

    const [contador, setContador] = useState(0);

    const aumentarContador = () => {
        setContador(contador + cantidad);
        resetearCantidad();
    }
    
    return (
        <div className='contador-container'>
            <div className="contador">
                <button onClick={aumentarCantidad}>+</button>
                <p>{cantidad}</p>
                <button onClick={disminuirCantidad}>-</button>
            </div>
            <div className='carrito'>
                <button onClick={aumentarContador}>Añadir al carrito</button>
                <p>{contador}</p>
            </div>
        </div>
    )
}

export default ItemCount;