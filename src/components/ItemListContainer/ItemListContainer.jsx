import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNotification } from "../../Notification/NotificationService";
import { db } from "../../services/firebase/firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import clas from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  const { showNotification } = useNotification()

  useEffect(() => {
    setLoading(true)

    const productsCollection = categoryId 
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products")
    
    getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
              const fields = doc.data()
              return{id: doc.id, ...fields}
            })

            setProducts(productsAdapted)
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
