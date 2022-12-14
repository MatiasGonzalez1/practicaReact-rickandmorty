import React, {useEffect, useState}from 'react';
import {useParams} from 'react-router-dom';
import { unicoPersonaje } from '../functions/funciones';

const Personajes = () => {
  const [personaje, setPersonaje] = useState(null)
  const params =  useParams()
  useEffect(()=>{
    unicoPersonaje(params.id, setPersonaje)
  }, [])
  return (
    <div>
      {personaje != null ? (
        <div>
          <h2>Personaje con el id {params.id}</h2>
        <p>Nombre:  {personaje.name}</p>
        <img src={personaje.image} alt=""/>
        </div>
        
      ) : ('no hay personaje')}
    </div>
  )
}

export default Personajes