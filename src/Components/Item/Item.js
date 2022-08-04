import { Link } from "react-router-dom"

import '../Item/Item.css'


function Item({id, title, price, pictureUrl,brand}){

    return(
        <article className="item-info">
            <div className="container-header-info">
               <img src={pictureUrl} alt='' className="item-img"/>
               <div className="header-text-info">
                   <img src={brand} alt='' className="info-brand" ></img>
                   <Link to={`/detail/${id}`} className="info-text">{title}</Link>
               </div>
            </div>
            <div className="container-footer-info">
               <p className="info-price">${price}</p>
            </div>
        </article>
    )
}

export default Item