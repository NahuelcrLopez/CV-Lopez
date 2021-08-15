import { createContext, useState, useEffect } from "react";
 export const CartContext = createContext();
// Pruebas
 export const CartProvider = ({ children }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(undefined);
  const [isHidden, setIsHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [widgetNumber, setWidgetNumber] = useState(0);
  const onAdd = (number) => setQuantityToAdd(number);
  const isInCart = (id) => {
   return cartItems.find((item) => id === item.item.id)
  };
  const addToCart = (item, count) => {
    if (isInCart(item.id)){
      const updateCart = [...cartItems];

      updateCart.forEach((element) => {
        if (element.item.id === item.id) {
         return element.count = element.count + count;
        }
      });
      setCartItems(updateCart);

    } else {

    const purchase = {
      item: item,
      count: count,
    };
    setCartItems([...cartItems, purchase]);
    setWidgetNumber(purchase.count + widgetNumber);
    alert(`Se agregaron ${count} items`);
  }};
  
  useEffect(() => {
    quantityToAdd ? setIsHidden(false) : setIsHidden(true);
  }, [quantityToAdd]);
  const clearCart = () => {
    setCartItems([]);
  };
  const removeItem = (id) => {
    const nuevoArray = cartItems.filter((i) => i.item.id !== id);
    setCartItems(nuevoArray);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        quantityToAdd,
        onAdd,
        isHidden,
        widgetNumber,
        isInCart,
        clearCart,
        setQuantityToAdd,
        removeItem,
        setWidgetNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
