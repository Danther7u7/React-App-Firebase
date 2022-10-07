import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import "../App.css"
import { Link } from "react-router-dom";

const Checkout = () => {

    const {cart, getTotal, clearCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const {Nombre, Email, Telefono} = buyer

    const generateOrder = async (data) => {
        try{
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)

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
        console.log('Datos de Compra:', data)
        generateOrder(data)
    }

    return (
        <div>
            
            <div className="container pt-4 text-center"><h4>Finalizando Compra</h4></div>
            <hr />
            {!orderId ? (
                <div className="container">
                <h5 className="mb-3 text-center">Completar Datos:</h5>
                <div className="d-flex justify-content-evenly">
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
                    <div className="text-center"><input
                        type="submit"
                        value="Finalizar Compra"
                        className="btn btn-success"
                    /></div>
                </form></div></div>) : 
                (<div>
                    {cart.map((element) => (
                        <div className="py-4 d-flex justify-content-evenly container">
                            <span className="textCart d-flex align-items-center"> {element.producto.nombre} </span>
                            <span className="textCart d-flex align-items-center"> Precio: {element.producto.precio} </span>
                            <span className="textCart d-flex align-items-center"> Cantidad: {element.cantidad} </span>
                            <img className="imgCart d-flex align-items-center" alt="Producto" src={element.producto.img}/>
                        </div>
                    ))}
                    <hr />
                    <div className="container text-center textCart pt-3"><span>Datos del Comprador:</span></div>
                
                    <div className="py-4 d-flex justify-content-evenly container">
                        <span className="d-flex align-items-center">Nombre: {Nombre}</span>
                        <span className="d-flex align-items-center">Email: {Email}</span>
                        <span className="d-flex align-items-center">Teléfono: {Telefono}</span>
                    </div>
                    <div className="container text-center pb-3 mb-3 textCart"><span>Precio Total: ${getTotal()}</span></div>
                    <div className="orderID py-3"><p className="container fs-5 text-center">Su orden de compra es: {orderId}</p></div>
                    <div className="container d-flex justify-content-center">
                    <Link to="/">
                        <button className="btn btn-success py-3 my-3 px-5" onClick={() => clearCart()} >Volver al inicio</button>
                    </Link></div>
                </div>)}
            </div>
)}

export default Checkout;