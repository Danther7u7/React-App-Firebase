import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Count from '../../ItemListContainer/ItemCount/ItemCount';
import '../../../components/App.css'

const ItemDetail = ({ producto }) => {
	const { addToCart, cart } = useContext(CartContext);
	const [isAdd, setIsAdd] = useState(false);
	let { nombre, marca, modelo, stock, precio, img, id } = producto;
    const [stockQuant, setStockQuant] = useState(30);

	const handleAdd = (cant) => {
		addToCart({id, nombre, precio, img}, cant);
		setStockQuant(stockQuant - cant);
		setIsAdd(true);
	};

	return (
		<div className='container py-4'>
			<div className='card mb-3'>
				<div>
					<div className='d-flex align-items-center justify-content-center'>
						<img src={img} className='img-fluid img-thumbnail my-3 imgDetail'/>
					</div>
					<div>
						<div className='card-body text-center'>
							<h5 className='card-title mb-3'>{nombre}</h5>
							<h6 className='card-text mb-3'>Marca: {marca} </h6>
							<h6 className='card-text mb-3'>Modelo: {modelo} </h6>
							<h6 className='card-text mb-3'>Precio: ${precio} </h6>
                            <h6 className='card-text mb-3'>Stock: {stockQuant} </h6>
							<p className='mb-3 mx-5 px-5'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								nulla a, cum qui, fuga aliquid, consequuntur itaque enim
								nesciunt ex sunt molestiae recusandae. Velit at soluta harum
								explicabo, tempora accusamus.
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								nulla a, cum qui, fuga aliquid, consequuntur itaque enim
								nesciunt ex sunt molestiae recusandae. Velit at soluta harum
								explicabo, tempora accusamus.
							</p>
							{isAdd != 0 ? (
								<Link to='/cart'><button className='btn btn-primary py-3'>Terminar mi compra</button></Link>
							) : (
								<Count onAdd={handleAdd} stock={stockQuant} />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
