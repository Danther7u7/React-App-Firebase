import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import React from 'react';
import CartView from './CartView/CartView'
import Checkout from './Checkout/Checkout';

function App() {
	return (
		<BrowserRouter>
			<NavBar />	
			<Routes>
				<Route path='/' element={<div className='container'><div className="row py-4 g-4"><ItemListContainer/></div></div>}></Route>
				<Route path='/productos/:categoria' element={<div className='container'><div className="row py-4 g-4"><ItemListContainer/></div></div>}></Route>
				<Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
				<Route path='/cart' element={<CartView/>}></Route>
				<Route path='/checkout' element={<Checkout/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
