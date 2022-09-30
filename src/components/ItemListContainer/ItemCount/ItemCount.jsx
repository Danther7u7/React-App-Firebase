import React, { useState } from 'react';
import Swal from 'sweetalert2'

const Count = ({ stock, onAdd }) => {
	const [count, setCount] = useState(1);

	const handleClick = (op) => {
		if (op === 'sumar') {
			if (count < stock) {
				setCount(count + 1);
			}
		}
		if (op === 'restar') {
			if (count > 1) {
				setCount(count - 1);
			}
		}

		if (op === 'reset') {
			setCount(1);
		}

		if (op === 'agregar') {
			onAdd(count);
			Swal.fire(
				'Producto agregado!',
				`Se agregó ${count} producto/s al carro!`,
				'success'
			  )
		}
	};

	return (
		<div>
			<h6 className='pb-2'>Cantidad: {count}</h6>
			<div className='pb-3'>
				<button
					className='btn btn-dark btnCount'
					onClick={() => handleClick('restar')}>
					{' '}
					-{' '}
				</button>
				<button
					className='btn btn-secondary btnCount'
					onClick={() => handleClick('reset')}>
					{' '}
					Reset{' '}
				</button>
				<button
					className='btn btn-dark btnCount'
					onClick={() => handleClick('sumar')}>
					{' '}
					+{' '}
				</button>
			</div>
			<button
				className='btn btn-primary py-3 px-5'
				onClick={() => handleClick('agregar')}>
				Agregar
			</button>
		</div>
	);
};

export default Count;