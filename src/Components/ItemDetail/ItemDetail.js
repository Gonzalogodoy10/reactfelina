import {useState } from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../context/CartContext';

import ItemCount from '../ItemCount/ItemCount';
import Sizes from '../Sizes/Sizes';

import '../ItemDetail/ItemDetail.css';




function ItemDetail({item}){

const [render,setRender] = useState(true)
const [size,setSize] = useState(null)

const {addToCart} = useCartContext()

const onAdd =(value)=>{
    setRender(false)
    addToCart({...item, quantity: value}) 
    alert(`Se agregaron ${value} ${item.name} en talle ${size}`)
}


return(
    <div>
        <article className='container-details'>
            <img src={item.img} alt='' className="details-img"></img>
            <div className='container-info-details'>
                <div>
                    <img src={item.brand} alt='' className='info-brand-details'></img>
                    <p className='info-name-details'>{item.name}</p>
                </div>
                <p className='info-price-details'>${item.price}</p>

                <p className='info-send-details'>Envio Gratis</p>
                <p className='info-size-details'>Elegi tu talle ARG</p>
                <Sizes sizes={item.sizes} setSize={setSize} />
                
                {
                    render ? 
                    <ItemCount  initial={1} stock={item.stock} onAdd={onAdd} size={size} />
                    :
                    <div className='button-cart-container'>
                        <Link to='/cart'><button className='button-detail-cart button-cart '>Ir al Carrito</button></Link>
                        <Link to='/'><button className='button-detail-cart'>Seguir comprando</button></Link>
                    </div>
                }
            </div>
        </article>
    </div>
)
}

export default ItemDetail