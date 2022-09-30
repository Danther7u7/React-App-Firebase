import React from "react";
const Form = ({varBuscar}) => {
  return (
    <>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder={varBuscar} />
        <button className="btn btn-dark my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </>
  )
}

export default Form;