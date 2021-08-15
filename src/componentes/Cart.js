import React,{ useContext } from 'react'
import { CartContext } from "./CartContext";
import CartTable from './CartTable';
import { Link } from 'react-router-dom';
export default function Cart() {
    const Cart = useContext(CartContext);
    const DATA = CartContext
    const style={
        textDecoration: "none" ,
        color: "#fff",
    }
    return (
        <div>
                
                <button className="btn btn-primary m-1 " onClick={()=>Cart.clearCart()}>Vaciar Carro</button> 
                <button className="btn btn-primary m-1 "><Link to="/" style={style}>Volver a Productos</Link></button>    
                    <CartTable />
               
        </div>
    )
}
