import carrito from '../../img/iconos/compras.png'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
    <div>
        <Link to="/cart">
            <img src={carrito} alt="carrito"></img>
        </Link>
    </div>
    );
}

export default CartWidget;