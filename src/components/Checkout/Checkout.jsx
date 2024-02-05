import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseconfig"
import { addDoc, collection, getDocs, query, writeBatch, where, documentId} from "firebase/firestore"
import { useNotification } from "../../Notification/NotificationService"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import clas from "./checkout.module.css"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart } = useCart()

    const { showNotification } = useNotification()
    
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
    
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total
        };
    
        const batch = writeBatch(db);
        const outDfStock = [];
        const ids = cart.map(prod => prod.id);
    
        // Verifica que el carrito no esté vacío
        if (ids.length > 0) {
            const productsRef = collection(db, "products");
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)));
    
            const { docs } = productsAddedFromFirestore;
            
            
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
    
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outDfStock.push({ id: doc.id, ...dataDoc });
                }
            });
    
            if (outDfStock.length === 0) {
                batch.commit();
    
                const orderRef = collection(db, "orders");
                const orderAdded = await addDoc(orderRef, objOrder);
    
                setOrderId(orderAdded.id);
                clearCart();
            } else {
                showNotification("info", "Hay productos que están fuera de stock");
            }
        } else {
            showNotification("info", "El carrito está vacío");
        }
    
        setLoading(false);
    };
    
        if(loading) {
            return <h1 style={{color:"white"}}>Se esta generado su orden...</h1> 
        }
        
        if(orderId) {
            return <h1>El id de su orden es: {orderId}</h1>
        }

    return(
        <div className={clas.Checkout}>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout