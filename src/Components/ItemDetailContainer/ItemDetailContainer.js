import { useEffect, useState } from "react";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

import '../ItemDetailContainer/ItemDetailContainer.css';
import '../ItemList/ItemList.css';


function ItemDetailContainer(){

    const [item,setItem] = useState(null)
    const {detailId} = useParams()

    useEffect(()=>{

        const db = getFirestore()
        const dbQuery = doc(db, 'productos', detailId)
        getDoc(dbQuery)
        .then(resp => setItem({id: resp.id, ...resp.data()}))
        
    },[detailId])

    return(
        <div className="container-item-detail">
            {
            item ? 
            
            <ItemDetail item={item}/>  

            : 
            
            <Loader/>
            }
        </div>
    )
}

export default ItemDetailContainer