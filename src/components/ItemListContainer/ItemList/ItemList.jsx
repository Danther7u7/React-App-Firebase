import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../../services/firebase'


const Producto = () => {
	const [list, setList] = useState([]);
	const {categoria} = useParams() 
	const getData = async(categoria) => {
		try{
			const document = categoria ? query(collection(db,"Items"), where("categoria", "==", categoria)) : collection(db, "Items")
			const col = await getDocs(document)
			console.log('col.docs', col.docs)
			const result = col.docs.map((doc) => doc = {id:doc.id,...doc.data()})
			setList(result)

		}catch(error){
			console.log(error)
		}
	}

	useEffect(() => {
		getData(categoria)
	}, [categoria])


		return (
			  	<>
			  		{list.map((elem, i) => (
			  			<Item key={i} producto={elem} />
			  		))}
			  	</>
		)	
	}
	//  const [list, setList] = useState([]);

	//  const {categoria} = useParams()

	//  const promise = new Promise((resolve, reject) => {
	// 	if(categoria) {
	// 		resolve(productos.filter(productos => productos.categoria === categoria));
	// 	} else {
	// 		resolve(productos);
	// 	}
	//  	reject();
	//  });

	//  useEffect(() => {
	//  	promise.then((data) => {
	//  		setList(data);
	//  	});
	//  }, [categoria]);

	//  return (
	//  	<>
	//  		{list.map((elem, i) => (
	//  			<Item key={i} producto={elem} />
	//  		))}
	//  	</>
	// );
// };

export default Producto;