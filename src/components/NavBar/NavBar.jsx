import React from 'react';
import Form from './Form/Form';
import NavBarItems from './NavBarItems/NavBarItems';
import Logo from './Logo/Logo';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg '>
				<div className='container-fluid'>
					<Logo />
					<div className='collapse navbar-collapse' id='navbarColor03'>
						<NavBarItems />
						<CartWidget />
						<Form varBuscar='Productos' />
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavBar;

