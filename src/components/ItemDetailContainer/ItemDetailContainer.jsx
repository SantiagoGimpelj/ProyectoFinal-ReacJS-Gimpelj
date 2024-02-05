import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import clas from "./ItemDetailContainer.module.css"
import { useNotification } from "../../Notification/NotificationService"
import { getProductById } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    const showNotification = useNotification()

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
        .then(products => {
            setProduct(products)
          })
        .catch(error => {
            showNotification("error", "hubo un error")
          })
        .finally(() => {
            setLoading(false)
          })
    }, [itemId])

    if(loading) {
        return <h1 style={{color:"white"}}>Cargando productos...</h1>
      }    

    return(
        <div className={clas.box}>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer