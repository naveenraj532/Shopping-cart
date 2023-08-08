import React,{useContext} from "react";
import { ShopContext } from "../../context/Shop-context";

function CartItem(props){

    const { id,productName, price, productImage } = props.data;
    const { cartItems, addTocart, removeFromcart, updateCartItemCount } = useContext(ShopContext);

    return(

        <div className="cartItem">
            <img style={{ height:"300px", width:"300px" }} src={productImage} />
            <div className="description">
                <b>{productName}</b>
                <p>Rs.{price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromcart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addTocart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}


export default CartItem;