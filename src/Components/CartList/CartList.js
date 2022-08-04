import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiFillDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import { useCartContext } from '../../context/CartContext';

import CartItem from '../CartItem/CartItem';
import Form from '../Form/Form';

import './CartList.css';

function CartList(){

const {cartList,removeCart,deleteProdCart,totalPrice} = useCartContext()

const [ok,setOk] = useState(false)



return(
    <div className='cart'>
        
        <div className='cart-top'>
            <Link to='/' className='home-button'><span><BiArrowBack/></span></Link>
            <p className='text-cart'>MI CARRITO</p>
            
        </div>

        <div className='cart-items-container'>
        {
            cartList ? 
            cartList.map(prod => {
                return(
                    <CartItem key={prod.id}
                    id={prod.id}
                    img={prod.img}
                    name={prod.name}
                    price={prod.price}
                    quantity={prod.quantity}
                    deleteProdCart={deleteProdCart}
                    />
                )
            })
            
                :
            <p>Cargando productos...</p>
        }
        </div>

        {
            cartList.length ? (
            <>
            
            <button onClick={removeCart} className='button-clear'><span><AiFillDelete/></span></button>

            <section className='section-total'>
            <p className='section-total-title'>TOTAL</p>
            <p className='section-total-value'>${totalPrice().toFixed(3)}</p>
            </section>
            

            {ok ?

            <Form/>
            
            :

            <button className='button-checkout' onClick={()=> setOk(true)}>FINALIZAR COMPRA</button>}

            </>
            ) :
            <p>El carrito esta vacio</p>
        }
        
        
    </div>
)
}

export default CartList