import { useState } from 'react'

const Form = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        cedulaDeIdentidad: '',
        email: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false) 

    const handleSubmit = () => {
        if(usuario.nombre.length > 3 && usuario.nombre.trim && usuario.cedulaDeIdentidad.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
        }
    }

   
  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre del Usuario</label>
        <input type="text" value={usuario.nombre}
            onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}
        />
        <label>Cedula de Identidad</label>
        <input type="text" value={usuario.cedulaDeIdentidad}
            onChange={(event) => setUsuario({...usuario, cedulaDeIdentidad: event.target.value})}
        />
        <label>email</label>
        <input type="text" value={usuario.email}
            onChange={(event) => setUsuario({...usuario, email: event.target.value})}
        />
        <button onClick={handleSubmit}>Reservar dia y Hora</button>
        {show && <h3>Gracias{usuario.nombre} Reservado para el Día</h3>}
        
        {error && <h4 style={{color: 'blue'}}>Por favor chequea que la información sea correcta</h4>}
    </form>
  )
}

export default Form