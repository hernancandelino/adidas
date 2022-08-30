import React, { useEffect, useState } from 'react'
import Item from '../item/item'
import ItemCount from '../itemCount/ItemCount'
import remeraArgentina from '../../img/remera-argentina.webp'
import remeraBoca from '../../img/remera-boca.webp'

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


const ItemList = () => {
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
                    <Item producto={producto}/>
                    <ItemCount/>
                </div>
               ) 
            })
    )
}

export default ItemList;