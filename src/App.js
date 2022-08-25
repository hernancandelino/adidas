import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <ItemListContainer/>
      </div>
      <div>
        <ItemCount/>
      </div>
    </div>
  );
}

export default App;
