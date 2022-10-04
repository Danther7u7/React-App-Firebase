import React, { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartView.css";
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeToCart, getTotal, clearCart} = useContext(CartContext);

    const soldCart = () => {
        Swal.fire(
            'Compra Exitosa!',
            'Muchas Gracias!',
            'success'
          )
        clearCart()
    }

    const cantidad = () => {
        let cant;
        cart.forEach((element) => {
            cant = (element.cantidad);
        })
        return cant;
    }

    // const [count, setCount] = useState(cantidad())
    // const menosCant = () => {
    //     if (count > 1) {
    //         setCount(count-1)
    //     }
    // }
    // const masCant = () => {
    //     if (count >= 1) {
    //         setCount(count+1)
    //     }
    // }

    return cart.length > 0 ? (
        <div>
            {cart.map((element) => (
                <div className="py-4 d-flex justify-content-evenly container">
                    <span className="textCart d-flex align-items-center"> {element.producto.nombre} </span>
                    <span className="textCart d-flex align-items-center"> Precio: {element.producto.precio} </span>
                    <span className="textCart d-flex align-items-center"> Cantidad: {element.cantidad} </span>
                    {/* <div className="d-flex align-items-center"><button className="btn btn-success btnOp" onClick={() => menosCant()}> - </button></div>
                    <div className="d-flex align-items-center"><button className="btn btn-danger btnOp" onClick={() => masCant()}> + </button></div> */}
                    <img className="imgCart d-flex align-items-center" src={element.producto.img}/>
                    <div className="d-flex align-items-center"><button className="btn btn-dark btnCart" onClick={() => removeToCart(element.producto.id)}> Eliminar </button></div>
                </div>
            ))}
            <div className="d-flex justify-content-center py-4 divTotal">
                <span className="textCart py-4 d-flex align-items-center textPrecio" >Precio Total: ${getTotal()}</span>
                <button className="btn btn-danger btnCart my-4" onClick={() => clearCart()}>Vaciar Carro</button>
                <Link to='/checkout'>
                    <button className="btn btn-success btnCart my-4">Finalizar mi Comprar</button>
                </Link>
            </div>
        </div>
    ) : (
        <div>
            <div className="container py-4 d-flex justify-content-center">
                <h5>No hay elementos en el carrito</h5>
            </div>
            <div className="container d-flex justify-content-center">
                <Link to="/">
                        <button className="btn btn-dark btnHome py-3">Volver al Inicio</button>
                </Link>
            </div>
        </div>
    )
}

export default CartView;