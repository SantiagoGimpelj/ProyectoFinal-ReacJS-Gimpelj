import { useEffect, useState } from "react"
// import { getProductById } from "../../AsyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import clas from "./ItemDetailContainer.module.css"
import { useNotification } from "../../Notification/NotificationService"
import { db } from "../../services/firebase/firebaseconfig"
import { getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    const showNotification = useNotification()

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, "products", itemId)
           
        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                showNotification("error", "hubo un error")
            })
            .finally(() => {
                setLoading(false)
            })
        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     showNotification("error", "Hubo un error cargando los productos")
        // })
        // .finally(() => {
        //     setLoading(false)
        // })
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