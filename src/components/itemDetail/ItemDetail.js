import ItemCount from "../itemCount/ItemCount";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({producto}) => {
    const {listaProductos, agregarProducto, sumarPrecio, precioCarrito} = useContext(CartContext);

    const onAdd = (cantidad)=>{

        const isInCart = (id)=> {
            const idProducto = listaProductos.filter(elm=>elm.id === id);
            const cantidadProducto = listaProductos.filter(elm=>elm.cantidad === cantidad);
            if (idProducto === true) {
                const nuevaCantidad = cantidadProducto
                agregarProducto(nuevaCantidad)
            }else {
                const productoNuevo={...producto, cantidad:cantidad}
                agregarProducto(productoNuevo)
                const precioNuevo = (producto.precio * producto.cantidad)  
                sumarPrecio(precioNuevo)
                console.log(precioNuevo)
            }
        }
        isInCart();
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