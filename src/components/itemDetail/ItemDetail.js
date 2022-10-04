import ItemCount from "../itemCount/ItemCount";
import './itemDetail.css'
import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {

    return (
        <div className="detalle-container">
            <div className="imagen-detalle">
                <div>
                    <Link className="categoria" to='/'>
                        <p>INICIO</p>
                    </Link>
                    <Link className="categoria" to='/'>
                        <p>/ {producto.categoria}</p>
                    </Link>
                    <Link className="categoria" to='/'>
                        <p>/ {producto.subCategoria}</p>
                    </Link>
                    <Link className="categoria" to='/'>
                        <p>/ {producto.lastCategoria}</p>
                    </Link>
                </div>
                <img className="producto__imagen" src={producto.pictureUrlGrande} alt={producto.title}></img>
            </div>
            <div className='producto-detail'>
                <div className="categorizacion">
                    <p>{producto.categoria}</p>
                    <p>●</p>
                    <p>{producto.subCategoria}</p>
                </div>
                <h2 className='producto__nombre'>
                    {producto.title}
                </h2>
                <p className='producto__precio'>
                    $ {producto.price}
                </p>
                <p className="colores">
                    {producto.color1} / {producto.color2}
                </p>
                <div className="descuento">
                    <h3>NO APLICA DESCUENTO</h3>
                    <p>Sobre este articulo no se podrá aplicar ningún tipo de descuento.</p>
                </div>
                <div className="contador">
                    <ItemCount producto={producto}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;