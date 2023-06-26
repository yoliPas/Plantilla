import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PagPrincipal from '../src/views/user/PagPrincipal';
import Registro from './views/user/RegistroUsuario';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<PagPrincipal/>}/> */}
       <Route path="/" exact element={<Registro/>}/>
        {/* <Route path="/contact" exact component={Contact}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
