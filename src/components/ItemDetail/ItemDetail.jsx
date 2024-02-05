import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import clas from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../Notification/NotificationService";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0)
  const [quantityAdded, setQuantityAdded] = useState(0)


  const { addItem } = useCart()

  const { showNotification } = useNotification()

  const handleOnAdd = (quantity) => {
      const objProductToAdd = {
        id,
        name,
        price, 
        quantity: quantity
      }
      addItem(objProductToAdd, quantity)
      showNotification("success", `Se agregaron correctamente ${quantity} ${name}`)
      setQuantity(quantity)
      setQuantityAdded(quantity)
    }

  return (
    <article className={clas.CardItem}>
      <header className={clas.Header}>
        <h2 className={clas.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={clas.ItemImg}/>
      </picture>
      <section>
        <p className={clas.Info}>
          Categoria: {category}
          </p>
        <p className={clas.Info}>
          Descripcion: {description}
          </p>
        <p className={clas.info}>
          Stock: {stock}
          </p>
        <p className={clas.Info}>
          Precio: ${price}
          </p>
      </section>
      <footer>
        {
          quantityAdded > 0 ? (
            <Link to="/cart" className={clas.option}>Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
        
      </footer>
    </article>
  );
};
export default ItemDetail;
