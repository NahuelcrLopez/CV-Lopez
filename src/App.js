import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer Bienvenida="Bienvenido"/>
    </div>
  );
}

export default App;
