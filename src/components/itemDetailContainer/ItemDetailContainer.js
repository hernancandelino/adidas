import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemDetail/ItemDetail";
import ItemCount from "../itemCount/ItemCount";
import datos from '../datos/Datos'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams();
    
    const obtenerProductos = () => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(datos)
            }, 3000);
        })
    }
    useEffect(()=>{
            if(!id){
                obtenerProductos();
                setProducto(datos)
            } else{
                const nuevoProducto = datos.find(producto=>producto.id === id);
                // console.log('nuevaLista',nuevaLista)
                setProducto(nuevoProducto)
            }},[id])
    return (
            <div className='card-detail'>
                <ItemDetail producto={producto}/>
                <ItemCount/>
            </div>
           ) 
}

export default ItemDetailContainer;