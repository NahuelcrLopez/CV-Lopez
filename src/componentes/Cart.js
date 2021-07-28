import React,{ useContext } from 'react'
import { CartContext } from "./CartContext";
import Item from './Item';
import CartTable from './CartTable'
export default function Cart() {
    const Cart = useContext(CartContext);
    const DATA = CartContext

    // const reiniciarCarrito = ()=>{
    //     setWidgetNumber(0)
    //     clearCart()
    // }
    return (
        <div>
                
                <button onClick={Cart.clear}>Borrar items</button>
                {Cart.cartItems.map((el)=>(
                    <div>
                    <button onClick={()=>Cart.removeItem(el.item.id)}>remover item</button>
                    <CartTable />
               <Item
               src={el.item.image}
               name={el.item.name}
               precio={el.item.precio}
               id={el.item.id}
               
             /></div>
            ))}
        </div>
    )
}
