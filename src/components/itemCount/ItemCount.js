import React, {useState} from 'react';
import './itemCount.css'

const ItemCount = ({producto}) => {
    const [productoCantidad, setProductoCantidad] = useState([0]);
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
    
    const onAdd = () => {
        const cantidadProducto = (producto.cantidad) + cantidad;
        setProductoCantidad(cantidadProducto)
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
                <button onClick={onAdd}>Añadir al carrito</button>
                <p>{productoCantidad}</p>
            </div>
        </div>
    )
}

export default ItemCount;