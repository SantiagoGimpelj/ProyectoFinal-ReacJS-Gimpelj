import Item from "../Item/Item"
import clas from "./ItemList.module.css"

const ItemList = ({products}) => {
    return(
        <div className={clas.ListGroup}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList