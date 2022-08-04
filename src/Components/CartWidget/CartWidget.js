import {RiShoppingCartFill} from "react-icons/ri"
import '../CartWidget/CartWidget.css'
import { useCartContext } from "../../context/CartContext"

function CartWidget(){

const {quantityTotal} = useCartContext()

return(
    <div className="item-cart-container">
    
    <RiShoppingCartFill className="icon-cart"/>
    {
        quantityTotal()?
    <p className="number-item">{quantityTotal()} </p>
    :
    <p></p>
    }    

    </div>
)
}

export default CartWidget