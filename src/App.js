import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicional';

function App() {
  return (
    <div>
        <NavBar />
        <Propiedades 
        saludo="hola mundo" 
        cadena= "hi"
        numero={19}
        booleano= {true}
        arreglo={[1,2,3]}
        objeto={{nombre: "nahuel", correo:"nahuellopez@gmail.com"}}
        />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <ItemListContainer Bienvenida="Bienvenido"/>
        <hr />
    </div>
  );
}

export default App;
