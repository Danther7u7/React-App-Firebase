import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/index';
import { productos } from './../../Mock/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams()

		const [producto, setProducto] = useState({})

		const getProducto = () => new Promise((resolve, reject) => {
			setTimeout(() => resolve(productos.find(product => product.id === parseInt(id))), 100)
		})

		useEffect(() => {
			getProducto()
			.then(response => setProducto(response))
		}, [])

		return (
			<ItemDetail producto={producto}/>
		)
	
};

export default ItemDetailContainer;