// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
import "./app.css";
import { ShopContextProvider } from "../context/Shop-context";

function App() {
  return (
    <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" Component={Shop} />
              <Route path="/cart" Component={Cart} />
          </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

