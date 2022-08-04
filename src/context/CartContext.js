import { createContext, useContext, useState } from "react";

import {addDoc, collection, getFirestore} from 'firebase/firestore';

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    function addToCart(newProduct){
    if(cartList.some((prodCart) => prodCart.id === newProduct.id)){
        const cart = [...cartList]
        cart.forEach((prodPresent)=>{
            if(prodPresent.id === newProduct.id){
                prodPresent.quantity += newProduct.quantity
            }
        })
        setCartList([...cart])
    }else{
        setCartList([
            ...cartList,
            newProduct
        ])
    }
        
    }

    const deleteProdCart = (id) => {
    const cart = [...cartList];
    let index = cart.findIndex((prodRemove) => prodRemove.id === id);

    cart.splice(index, 1);

    setCartList([...cart]);
    };

    const removeCart = ()=>{
        setCartList([])
    }

    const totalPrice =()=>{
        return cartList.reduce((cont, product)=> (cont += product.quantity * product.price), 0)
    }


    const quantityTotal =()=>{
        return cartList.reduce((cont, product)=> cont += product.quantity, 0)
    }


    async function generateOrder(dataUser){
    
    let order = {}

    order.buyer = {dataUser}
    order.date = Date()
    order.total = totalPrice()

    order.items = cartList.map(cartItem => {
        const id = cartItem.id
        const name = cartItem.name
        const price = cartItem.price
        const quantity = cartItem.quantity

        return {id,name,price,quantity}
    })

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then(({id})=> alert(`Su pedido fue enviado con exito! Su Numero de orden es: ${id}`))
    .catch((err)=> console.log(err))
    .finally(()=> removeCart())
} 

return(
    <CartContext.Provider value={{
        cartList,
        addToCart,
        deleteProdCart,
        removeCart,
        totalPrice,
        quantityTotal,
        generateOrder
    }}>
        {children}
    </CartContext.Provider>
)
}


export default CartContextProvider