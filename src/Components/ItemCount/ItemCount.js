import { useState } from "react";

import '../ItemCount/ItemCount.css';

function ItemCount({initial,stock,onAdd,size}){

const [value,setValue] = useState(initial)

const addProduct=(num)=>{
    setValue((num) + value)
}

return( 
    <div className="info-container-button">
        <div>
            <button onClick={()=> addProduct(-1)} disabled={initial === value} className="button">-</button>
            <p>{value}</p>
            <button onClick={()=> addProduct(1)} disabled={stock === value} className="button">+</button>
        </div>
        <button onClick={()=> onAdd(value)} disabled={size === null} className="button-add">Agregar al carrito</button>
    </div>
    )
}

export default ItemCount
