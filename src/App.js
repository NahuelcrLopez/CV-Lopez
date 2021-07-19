import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Seccion1 from './componentes/Seccion1';
import Cart from './componentes/Cart'

import {CartContext} from "./componentes/CartContext"
import { useState } from 'react';
// import Hooks from './componentes/Hooks';
// import Estado from './componentes/Estado';
// import CicloVida from './componentes/CicloVida';
function App() {
  const [cartList, setCartList]= useState([]);
  return (
    <CartContext.Provider value={{cartList}}>
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
    </CartContext.Provider>
  );
}

export default App;
