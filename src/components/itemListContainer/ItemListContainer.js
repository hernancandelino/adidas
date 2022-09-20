import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../itemListContainer/itemListContainer.css'
import ItemList from '../itemList/ItemList';
import { collection, getDocs, query} from "firebase/firestore";
import { db } from '../../utils/datos'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams();
    const [datos, setDatos] = useState([])
            useEffect(()=>{
                const getData = async()=>{
                    const queryRef = query(collection(db,"item"));
                    const response = await getDocs(queryRef);
                    const docs = response.docs;
                    const data = docs.map(doc=>{return {...doc.data(), id:doc.id} });
                    console.log(data)
                    setDatos(data);
                    console.log(datos)
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