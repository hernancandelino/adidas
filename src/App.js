import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartWidgetContainer } from './components/cartWidgetContainer/CartWidgetContainer';

function App() {
  return (
    <CartProvider>  
  <BrowserRouter>

  <div className="App">
      <NavBar/>

    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path="/productos" element={<ItemListContainer />}/>
      <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartWidgetContainer/>}/>
    </Routes>
    
  </div>
    </BrowserRouter>
    </CartProvider>
  
  );
}

export default App;
