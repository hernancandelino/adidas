import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemDetail/ItemDetail";
import { db } from "../../utils/datos";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        const queryRef = doc(db,"item",id);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            setProducto(newDoc);
        });
    },[id])
        return (
                <div className='card-detail'>
                    <ItemDetail producto={producto}/>
                </div>
               ) 
}

export default ItemDetailContainer;