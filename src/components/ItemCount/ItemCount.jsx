import clas from "./ItemCount.module.css"
import { useState } from "react"

const ItemCount = ({stock, initial= 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div>
            <div className={clas.count}>
                <button className={clas.btn} onClick={decrement}>-</button>
                <h4 className={clas.number}>{quantity}</h4>
                <button className={clas.btn} onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount