import axios from 'axios'; //se importa axios

const todosLosPersonajes = async (state) =>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const unicoPersonaje = async(id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(peticion.data   );
    state(peticion.data)
}
export{
    todosLosPersonajes,
    unicoPersonaje
}