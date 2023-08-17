import React from "react";
import './Card.css'


const Card = ({ peliculas, setDia}) => {


  return (
  <div >
      <h3>{peliculas.nombre}</h3>
      <h4>{peliculas.tematica}</h4>
      <button onClick={() => setDia(true)}>Dia de Reserva</button>
      
  </div>
  )
}

export default Card


  

