import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../Products";
import CartItem from "./CartItem";

import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotal } = useContext(ShopContext);
  const totalFinal = getTotal()

  const navigate = useNavigate()

  return (
    <>
    <div className="cart">
      <h1>Your Cart Items</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />
          }
        })}
      </div>
    </div>
    {totalFinal > 0 ? 
        <div className="checkout">
        {}
        <p>Subtotal: Rs.{totalFinal}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
    </div>
  :<h1>Your Cart is Empty</h1>}
    </>
  );
}

export default Cart;
