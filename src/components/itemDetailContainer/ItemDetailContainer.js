import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import ItemCount from "../itemCount/ItemCount";

const listaProductos = [
    {
        id: '1',
        title: 'Remera Argentina',
        price: '16.999',
    },
    {
        id: '2',
        title: 'Remera Boca',
        price: '16.999',
    }
]


const ItemDetailContainer = (producto) => {
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
            <div className='card-detail'>
                <ItemDetail producto={producto}/>
                <ItemCount/>
            </div>
           ) 
        })
    )
}

export default ItemDetailContainer;