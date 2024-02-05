import clas from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className={clas.CardItem}>
      <header className={clas.Header}>
        <h2 className={clas.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className={clas.ItemImg} />
      </picture>
      <section>
        <p className={clas.Info}>Precio: ${price}</p>
        <p className={clas.Info}>Stock disponible: {stock}</p>
      </section>
      <footer className={clas.ItemFooter}>
        <Link to={`/item/${id}`} className={clas.option}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};
export default Item;
