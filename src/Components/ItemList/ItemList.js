import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getData } from "../../functions/getData";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

import '../ItemList/ItemList.css';


const ItemList = memo( 
()=>{
const [prods,setProds] = useState([])
const {categoryId} = useParams()
const {categoryArticleId} = useParams()

useEffect(()=>{

    getData(categoryId,categoryArticleId,setProds)

},[categoryId,categoryArticleId])


return(
    <div className="container-items">
        {
            prods.length ?  prods.map((product) => {
                    return(
                        <div key={product.id}>
                            <Item
                                pictureUrl={product.img}                  
                                brand={product.brand}
                                title={product.name}
                                price={product.price}
                                stock={product.stock}
                                id={product.id}                            
                            />
                        </div>
                    )
                })
            
            :
            
            <Loader/>
            
        }
    </div>
)

}
)
export default ItemList
