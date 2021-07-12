import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Seccion1 from './componentes/Seccion1';
import Cart from './componentes/Cart'
// import Hooks from './componentes/Hooks';
// import Estado from './componentes/Estado';
// import CicloVida from './componentes/CicloVida';
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
        <Route  exact path="/cart" component={Cart}/>
       </Switch>
      </BrowserRouter>
      {/* <Hooks />
      <hr />
      <Estado />
      <hr />
      <CicloVida /> */}
    </div>
  );
}

export default App;
