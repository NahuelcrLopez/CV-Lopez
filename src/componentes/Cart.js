import React,{ useContext } from 'react'
import { CartContext } from "./CartContext";
import Item from './Item';

export default function Cart() {
    const Cart = useContext(CartContext);
    return (
        <div>
            
                <button onClick={Cart.clear}>Borrar items</button>
                {Cart.cartList.map((el)=>(
                    <div>
                    <button onClick={()=>Cart.removeItem(el.item.id)}>remover item</button>
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
