import '../../App.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
	const { nombre, marca, stock, precio, img, id} = producto;

	return (
      <div className="col-md-3">
        <div className="card text-center" style={{width: '18rem'}}>
          <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className='mb-2'>Marca: {marca}</h6>
        <h6 className='mb-2'>Stock: {stock}</h6>
        <h6 className='mb-2'>Precio: ${precio}</h6>
        <Link className='nav-link' to={`/detalles/${id}`}>
          <button className='btn btn-primary my-2 py-3'>Mostrar Mas</button>
        </Link>
      </div>
      </div>
    </div>
	);
};

export default Item;
