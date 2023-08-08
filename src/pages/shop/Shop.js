import React from "react";
import { PRODUCTS } from "../../Products";
import "./shop.css";
import Product from "./Product";

function Shop() {

  return (
    <div className="shop">
      <div className="title">
        <h1>Shop</h1>
      </div>
      <div className="products">{PRODUCTS.map((product) => <Product data={product} />)}</div>
    </div>
  );
}

export default Shop;

