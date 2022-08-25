import React, {useState} from 'react';
import './itemCount.css'

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0);

    const aumentarCantidad = () => {
        if (cantidad >= 0) {
            setCantidad(cantidad + 1);
        }
    }
    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }
    
    return (
    <div className="contador">
        <button className='boton-sumar' onClick={aumentarCantidad}>+</button>
        <p>{cantidad}</p>
        <button className='boton-restar' onClick={disminuirCantidad}>-</button>
    </div>
    )
}

export default ItemCount;