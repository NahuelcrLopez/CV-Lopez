import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Seccion1 from './componentes/Seccion1';
import Cart from './componentes/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from "./componentes/CartContext"
function App() {
  return (
    <CartProvider>
    <div>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
        <ItemListContainer />
       </Route>
       <Route exact path="/:categoryId">
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
    </div>
    </CartProvider>
  );
}
export default App;