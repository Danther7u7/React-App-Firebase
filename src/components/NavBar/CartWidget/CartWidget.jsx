import '../../App.css';
import { FaShoppingCart } from 'react-icons/fa';
import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';



const CartWidget = () => {
	const {cart, cantProduct} = useContext(CartContext);

	return cart.length > 0 ? (
		<div>
			<Link className='nav-link' to='/cart'>
			<button className='btn btn-light btn-car' type='submit'>
				<div className='d-inline-flex'><FaShoppingCart /> <p className='btn-cant'>{cantProduct()}</p></div>
			</button>
			</Link>
		</div>
	) : (
		<div></div>
	)
};

export default CartWidget;