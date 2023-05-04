import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div>
        <NavBar />
        <ItemListContainer greeting= {"Bienvenidos a nuetra tienda online de cervezas artesanales"}/>
      </div>
  );
}

export default App;
