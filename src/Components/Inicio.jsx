import React, {useEffect, useState} from 'react';
import { todosLosPersonajes } from '../functions/funciones';

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)

  useEffect(()=>{
    todosLosPersonajes(setPersonajes)
  },[])

  return (
    <div>
      {personajes != null ? (personajes.map(personaje =>(
        <div key={personaje.id}>
          <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
        <img src={personaje.image} alt=''/>
        </div>
      ))) : ('no hay nada para mostrar')}
    </div>
  )
}

export default Inicio