import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/views/user/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
       {/*  <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
