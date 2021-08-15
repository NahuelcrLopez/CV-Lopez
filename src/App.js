import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nosotros from './componentes/Nosotros';
import Cart from './componentes/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from "./componentes/CartContext";
import Error404 from './componentes/Error404';
import Footer from './componentes/Footer';
function App() {
  return (
    <CartProvider>
    <div>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route exact path="/Nosotros" component={Nosotros}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/:categoryId" component={ItemListContainer}/>
        <Route exact path="/itemDetail/:id"component={ItemDetailContainer}/> 
        <Route path="*" component={Error404}/> 
      </Switch>
      </BrowserRouter>
      <>
      <Footer />
      </>
    </div>
    </CartProvider>
  );
}
export default App;