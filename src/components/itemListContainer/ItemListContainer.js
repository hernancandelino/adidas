import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../itemListContainer/itemListContainer.css'
import ItemList from '../itemList/ItemList';
import datos from '../datos/Datos'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    
    const obtenerProductos = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(datos)
            }, 3000);
        })
    }
    useEffect(()=>{
            if(!categoria){
                obtenerProductos();
                setProductos(datos)
            } else{
                const nuevaLista = datos.filter(producto=>producto.categoria === categoria.toUpperCase());
                // console.log('nuevaLista',nuevaLista)
                setProductos(nuevaLista)
            }},[categoria])
    return (
        <>
            <div>        
                <h1>
                    Adidas
                </h1>
            </div>
            <div className='contenedor-cards'>
                <ItemList producto={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer;