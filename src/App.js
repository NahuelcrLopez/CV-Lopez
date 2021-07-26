import './App.css';
import NavBar from './componentes/navBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Seccion1 from './componentes/Seccion1';
import Cart from './componentes/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';

import {CartContext} from "./componentes/CartContext"
import { useState } from 'react';

function App() {
  const [cartList, setCartList]= useState([]);
  const objetoCarrito = (item,quantity) => {
    inCart(item.id)? console.log("Se encontro el item"):setCartList([...cartList,{item,quantity}])
  };
  const inCart = (id) => {
    return cartList.find(i=>i.item.id===id)
  }
function clear () {
  setCartList([])
}
function removeItem(itemId) {
    const nuevoArray = cartList.filter(i=>i.item.id!==itemId)
    setCartList(nuevoArray)
}
  return (
    <CartContext.Provider value={{cartList,objetoCarrito,clear,removeItem}}>
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

    </div>
    </CartContext.Provider>
  );
}

export default App;
