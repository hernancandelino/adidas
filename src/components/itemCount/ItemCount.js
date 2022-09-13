import React, {useState} from 'react';
import './itemCount.css'

const ItemCount = ({onAdd}) => {
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
    
    return (
        <div className='contador-container'>
            <div className="contador">
                <button onClick={aumentarCantidad}>+</button>
                <p>{cantidad}</p>
                <button onClick={disminuirCantidad}>-</button>
            </div>
            <div className='carrito'>
                <button onClick={() => onAdd(cantidad)}>Añadir al carrito</button>
                <p>{cantidad}</p>
            </div>
        </div>
    )
}

export default ItemCount;