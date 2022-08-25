import React, {useState} from 'react';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    }
    const disminuirCantidad = () => {
        setCantidad(cantidad - 1);
    }

    return (
    <div className="contador">
        <button className='boton-sumar' onClick={aumentarCantidad()}>+</button>
        <p>{cantidad}</p>
        <button className='boton-restar' onClick={disminuirCantidad()}>-</button>
    </div>
    )
}

export default ItemCount;