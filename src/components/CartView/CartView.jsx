import React from 'react';
import CartList from "../CartList/CartList";
import clas from "./CartView.module.css"
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const CartView = () => {
  const { total, totalQuantity, clearCart } = useCart();

  return (
    <div className={clas.CartView}>
      <h1>Carrito</h1>
      <CartList />
      <div className={clas.option}>
        <p className={clas.info}>Total de Productos: {totalQuantity}</p>
        <p className={clas.info}>Total: ${total}</p>
        <button onClick={clearCart} className={clas.btn}>Limpiar Carrito</button>
      </div> 
      <div className={clas.divcheck}>
        <Link to="/checkout" className={clas.check}>Checkout</Link>
      </div>
    </div>
  );
}

export default CartView;
