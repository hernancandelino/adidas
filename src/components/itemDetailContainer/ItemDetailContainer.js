import { useState, useEffect } from "react";
import remeraArgentina from '../../img/remera-argentina.webp'
import remeraBoca from '../../img/remera-boca.webp'
import ItemDetail from "../itemDetail/ItemDetail";
import ItemCount from "../itemCount/ItemCount";

const listaProductos = [
    {
        id: '1',
        title: 'Remera Argentina',
        price: '16.999',
        pictureUrl: remeraArgentina,
    },
    {
        id: '2',
        title: 'Remera Boca',
        price: '16.999',
        pictureUrl: remeraBoca,
    }
]


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    
    const obtenerProductos = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(listaProductos)
            }, 3000);
        })
    }
    useEffect(() => {
        const añadirProductos = async () => {
            const productosAwait = await obtenerProductos();
            setProductos(productosAwait);
        }
        añadirProductos();
    },[])
    return (
        productos.map((producto) => {
           return (
            <div className='card'>
                <ItemDetail producto={producto}/>
                <ItemCount/>
            </div>
           ) 
        })
    )
}

export default ItemDetailContainer;