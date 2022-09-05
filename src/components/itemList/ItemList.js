import React, { useEffect, useState } from 'react'
import Item from '../item/item'
import remeraArgentina from '../../img/remeras-deportivas/remera-argentina.png'
import remeraArgentinaAlternativa from '../../img/remeras-deportivas/remera-argentina-alternativa.png'
import remeraBoca from '../../img/remeras-deportivas/remera-boca.png'
import remeraBocaSuplente from '../../img/remeras-deportivas/remera-boca-suplente.png'
import remeraBocaAlternativa from '../../img/remeras-deportivas/remera-boca-alternativa.png'
import remeraBocaTercera from '../../img/remeras-deportivas/remera-boca-tercera.png'
import remeraRiver from '../../img/remeras-deportivas/remera-river.png'
import remeraRiverSuplente from '../../img/remeras-deportivas/remera-river-suplente.png'
import pantalonBoca from '../../img/pantalones-deportivos/pantalon-boca.png'

const listaProductos = [
    {
        id: '1',
        title: 'Remera Argentina',
        price: '16.999',
        pictureUrl: remeraArgentina,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '2',
        title: 'Remera Argentina Alternativa',
        price: '16.999',
        pictureUrl: remeraArgentinaAlternativa,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '3',
        title: 'Remera Boca Juniors',
        price: '16.999',
        pictureUrl: remeraBoca,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '4',
        title: 'Remera Boca Juniors Alternativa',
        price: '16.999',
        pictureUrl: remeraBocaSuplente,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '5',
        title: 'Remera Boca Juniors Suplente',
        price: '16.999',
        pictureUrl: remeraBocaAlternativa,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '6',
        title: 'Remera Boca Juniors Tercera',
        price: '16.999',
        pictureUrl: remeraBocaTercera,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '7',
        title: 'Remera River Plate',
        price: '16.999',
        pictureUrl: remeraRiver,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '8',
        title: 'Remera Boca Juniors Alternativa',
        price: '16.999',
        pictureUrl: remeraRiverSuplente,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Remeras',
    },
    {
        id: '9',
        title: 'Pantalon deportivo Boca Juniors',
        price: '16.999',
        pictureUrl: pantalonBoca,
        categoria: 'Deportes',
        subCategoria:'Futbol',
        lastCategoria: 'Pantalon',
    },
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
                <>
                    <Item producto={producto}/>
                </>
               ) 
            })
    )
}

export default ItemList;