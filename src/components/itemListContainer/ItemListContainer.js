import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../itemListContainer/itemListContainer.css'
import ItemList from '../itemList/ItemList';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../../utils/datos'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    const [datos, setDatos] = useState([])
      useEffect(()=>{
         const getData = async()=>{
             const query = collection(db,"item");
             const response = await getDocs(query);
             const docs = response.docs;
             const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
             setDatos(data)
             setProductos(data);
         }
         getData()
     },[])
    useEffect(()=>{
            if(!categoria){
                setProductos(datos)
            } else{
                const nuevaLista = datos.filter(producto=>producto.categoria === categoria.toUpperCase());
                setProductos(nuevaLista)
            }},[categoria])
    return (
        <>
            <div className='contenedor-cards'>
                <ItemList producto={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer;