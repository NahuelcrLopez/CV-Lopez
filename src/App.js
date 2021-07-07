import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
// import Propiedades from './componentes/Propiedades';
// import Estado from './componentes/Estado';
// import RenderizadoCondicional from './componentes/RenderizadoCondicional';
// import RenderizadoElementos from './componentes/RenderizadoElementos';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Seccion1 from './componentes/Seccion1';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
        <ItemListContainer />
       </Route>
       <Route exact path="/Seccion1">
        <Seccion1 />
       </Route>
       <Route exact path="/itemDetail/:id">
          <ItemDetailContainer />
        </Route>
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
