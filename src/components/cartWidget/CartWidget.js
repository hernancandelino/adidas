import carrito from '../../img/iconos/compras.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cartWidget.css';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);

    const CantidadCarrito = () => {
        return (
            <>
                <p>{cantidadCarrito}</p>
            </>
        )
    }

    return (
    <div>
        <Link className={`${cantidadCarrito > 0 ? `carrito-activo` : `carrito-inactivo`}`} to="/cart">
            <img src={carrito} alt="carrito"></img>
            <CantidadCarrito/>
        </Link>
    </div>
    );
}

export default CartWidget;