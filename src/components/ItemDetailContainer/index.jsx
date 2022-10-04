import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail/index';
import db from '../../services/firebase'
import {doc, getDoc} from 'firebase/firestore'

// import { productos } from './../../Mock/productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const {id} = useParams()
	const [producto, setProducto] = useState({})

		// const getProducto = () => new Promise((resolve, reject) => {
		// 	setTimeout(() => resolve(productos.find(product => product.id === parseInt(id))), 100)
		// })

		// useEffect(() => {
		// 	getProducto()
		// 	.then(response => setProducto(response))
		// }, [])

	const getSelected = async(idItem) => {
		try {
			const document = doc(db, "Items", idItem)
			const response = await getDoc(document)
			const result = {id: response.id, ...response.data()}
			setProducto(result)

		}catch(error){
			console.log(error)
		}
	}

	useEffect(() => {
		getSelected(id)
	}, [id])

	return (
		<ItemDetail producto={producto}/>
	)
	
};

export default ItemDetailContainer;