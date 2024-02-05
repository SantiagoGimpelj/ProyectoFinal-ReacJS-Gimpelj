import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNotification } from "../../Notification/NotificationService";
import clas from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services/firebase/firestore/products";


const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const { showNotification } = useNotification()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId)
        .then(products => {
          setProducts(products)
        })
        .catch(error => {
          showNotification("error", "hubo un error")
        })
        .finally(() => {
          setLoading(false)
        })
  }, [categoryId]);

  if(loading) {
    return <h1 style={{color:"white"}}>Cargando productos...</h1>
  }

  return (
    <div className={clas.container}>
      <h1 className={clas.h1}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
