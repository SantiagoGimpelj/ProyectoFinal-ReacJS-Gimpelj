import React from 'react';
import clas from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";

const CartList = () => {
  const { cart } = useCart();

  return (
    <div className={clas.CartGroup}>
      {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
    </div>
  );
}

export default CartList;
