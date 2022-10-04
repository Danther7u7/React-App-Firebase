import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {

    const {cart, getTotal, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const {Nombre, Email, Telefono} = buyer

    const generateOrder = async(data) => {
        try{
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            console.log(order)
            setOrderId(order.id)
            clearCart()

        }catch(error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map(e=>{return{id:e.producto.id, title:e.producto.nombre, price: e.producto.precio, cant: e.cantidad}})
        const date = new Date()
        const total = getTotal()
        const data = {buyer, items, date, total}
        console.log('data', data)
        generateOrder()

    }
    




    return (
        <div className="container py-4">
            <h4>Finalizando Compra</h4>
            <hr />
            <h5 className="mb-3">Completar Datos:</h5>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    value={Nombre}
                    onChange={handleInputChange}
                    className="mb-3"
                /><br />
                <input 
                    type="text"
                    name="Email"
                    placeholder="Email"
                    value={Email}
                    onChange={handleInputChange}
                    className="mb-3"
                /><br />
                <input 
                    type="text"
                    name="Telefono"
                    placeholder="Telefono"
                    value={Telefono}
                    onChange={handleInputChange}
                    className="mb-3"
                /><br />
                <input 
                    type="submit"
                    value="Finalizar Compra"
                    className="btn btn-success"
                />
            </form>
        </div>
    )
}

export default Checkout;