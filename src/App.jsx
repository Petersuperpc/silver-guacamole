import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  
  const [dia, setDia] = useState(false)

  let peliculas = [
    {id: 1, nombre: ' The lord of the rings', tematica: 'Fantasia Epica'},
    {id: 2, nombre: 'Sexto sentido', tematica: 'Suspenso psicologico'},
    {id: 3, nombre: 'Harry Potter', tematica: 'Fantasia'},
    {id: 4, nombre: 'La vida es bella', tematica: 'Drama'}
  ]

  return (
    <>
      {peliculas.map((peliculas) => <Card key={peliculas.id} peliculas={peliculas} setDia={setDia}/>)}
      {dia && <Form/>}
    
    </>
    );
}

export default App
