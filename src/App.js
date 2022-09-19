import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Inicio from './Components/Inicio';
import Personajes from './Components/Personajes.jsx';

function App() {
  return (
    <div className="contenedor">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path='/personaje/:id' element={<Personajes/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
