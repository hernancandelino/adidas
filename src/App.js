import './App.css';
import NavBar from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
