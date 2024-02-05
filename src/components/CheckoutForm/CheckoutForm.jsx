import { useState } from "react"
import clas from "./CheckoutForm.module.css"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className={clas.divform}>
            <form onSubmit={handleConfirm} className={clas.form}>
                <label className={clas.label}>
                    Nombre:
                    <input className={clas.input} type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className={clas.label}>
                    Telefono:
                    <input className={clas.input} type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className={clas.label}>
                    Email:
                    <input className={clas.input}type="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className={clas.btn}>
                    <button type="sumbit" className="button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm