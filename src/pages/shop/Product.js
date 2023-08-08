import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./shop.css";

function Product(props) {
  const { id, productName, price, productImage } = props.data;

  const { addTocart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs. {price}</p>
        <button className="addTocart" onClick={() => addTocart(id)}>
          Add to Cart  {cartItemAmount > 0 && <>{cartItemAmount}</>}
        </button>
      </div>
    </div>
  );
}

export default Product;
