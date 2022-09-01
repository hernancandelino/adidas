import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <ItemListContainer/>
      </div>
      <div>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
