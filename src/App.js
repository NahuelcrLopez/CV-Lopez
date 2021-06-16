import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/navBar';
import CartWidget from './componentes/CartWidget.';
import ItemListContainer from './componentes/ItemListContainer';
function App() {
  return (
    <div>
        <NavBar />
        <CartWidget />
        <ItemListContainer />
    </div>
  );
}

export default App;
