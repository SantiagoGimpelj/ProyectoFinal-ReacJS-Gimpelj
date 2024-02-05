import { useState } from "react"

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
        <div>
            <form onSubmit={handleConfirm} className="form">
                <label className="label">
                    Nombre
                    <input className="input" type="text" value={name} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className="label">
                    Telefono
                    <input className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label className="input">
                    Email
                    <input className="input" type="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <div className="label">
                    <button type="sumbit" className="button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm