import '../../App.css';
import { Link } from 'react-router-dom';
import ImagenLogo from '../../../Logo/logoTech.svg';
import React from 'react';

const Logo = () => {
	return (
		<>	
			<Link to='/'>
			<a className='navbar-brand'>
				<img className='LogoEmpanadas' src={ImagenLogo} alt='' />
			</a>
			</Link>

			<button
				className='navbar-toggler'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarColor03'
				aria-controls='navbarColor03'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon' />
			</button>
		</>
	);
};

export default Logo;