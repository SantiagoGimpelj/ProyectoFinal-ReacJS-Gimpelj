import React from 'react';
import clas from "./CartItem.module.css";
import { useCart } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity}) => {
  const { removeItem } = useCart();

  return (
    <div className={clas.CardItem}>
      <h2>{name}</h2>
      <p>Cantidad: {quantity}</p>
      <h3>Precio por unidad: ${price}</h3>
      <h3>Subtotal: ${quantity * price}</h3>
      <button onClick={() => removeItem(id)} style={{background:"rgb(224, 107, 107)", color:"white"}}>Quitar Producto</button>
    </div>
  );
}

export default CartItem;
