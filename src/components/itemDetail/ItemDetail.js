import ItemCount from "../itemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({producto}) => {
    const {agregarProducto} = useContext(CartContext);

    const onAdd = (cantidad)=>{
        const productoNuevo={...producto, cantidad:cantidad}
        agregarProducto(productoNuevo)
      }

    return (
        <>        
        <div className='producto-detail'>
            <img className="producto__imagen" src={producto.pictureUrl} alt={producto.title}></img>
            <p className='producto__nombre'>
                {producto.title}
            </p>
            <p className='producto__precio'>
                ${producto.price}
            </p>
        </div>
        <div>
            <ItemCount onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail;