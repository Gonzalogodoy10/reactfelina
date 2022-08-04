import { useEffect, useState } from "react";

import { TiDeleteOutline } from "react-icons/ti";

import './CartItem.css';

function CartItem({id,img,name,price,quantity,deleteProdCart}){

  const [ok,setOk] = useState(true)

  useEffect(()=>{
      setTimeout(() => {
          setOk(false)
      }, 1500);
  },[])


  return(
      <div className='prod-cart' key={id} >
                          <img src={img} alt=''></img>
                          <div className='cart-text'>
                              <section className='section-text'>
                                <p className={ok ? 'section-title' : 'section-title extends-text'} >PRODUCTO</p>
                                <p className='cart-text-name'>{name} </p>
                              </section>
                              <section className='section-text'>
                                <p className={ok ? 'section-title' : 'section-title extends-text'} >PRECIO</p>
                                <p className='cart-text-price'>${price} </p>
                              </section>
                              <section className='section-text'>
                                <p className={ok ? 'section-title' : 'section-title extends-text'} >CANTIDAD</p>  
                                <p className='cart-text-quan'>{quantity}</p>
                              </section>
                              <section className='section-text'>
                                <p className={ok ? 'section-title' : 'section-title extends-text'} >TOTAL</p>  
                                <p className='cart-text-total'>${(price * quantity).toFixed(3)} </p>
                              </section>
                              <button onClick={()=> deleteProdCart(id)}  className='delete-button'><TiDeleteOutline/></button>
                          </div>
                          
                      </div>
  )
}

export default CartItem