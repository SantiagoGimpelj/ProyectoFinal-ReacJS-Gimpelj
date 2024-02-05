import cart from "./assets/carrito.jpg";
import clas from "./CartWidget.module.css"
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart()
 
  return (
    <div className={clas.carrito}>
      <img src={cart}  className={clas.img}/>
      <span className={clas.countcart}>{totalQuantity}</span>
    </div>
  );
};

export default CartWidget;
