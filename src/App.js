import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

  <div className="App">
      <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path="/productos" element={<ItemListContainer />}/>
      <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    
  </div>
    </BrowserRouter>
  );
}

export default App;
