import React, { useState, useContext } from "react";
import ItemCounter from "./ItemCounter";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CartContext } from "./CartContext";

export default function ItemDetail(props) {
  const [quantityToAdd, setQuantityToAdd] = useState(false);
  const Cart = useContext(CartContext);
  const divStyle ={
    width: '100%',
    height:'75vh',
   
  }
  const styleCard ={
            margin: "0 auto",
            background: "rgba(54, 0, 204, 0.555)",
            color:"rgb(255, 255, 255)",
            width: "400px",
            padding: "20px",
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.377)",
            borderRadius: "20px",           
  }
  const cardHeader={
    background: "crimson",            
    margin: "-20px",
    padding: "20px",
    borderRadius: "20px 20px 0px 0px",
}
  const cardBody={
    background: "rgb(40, 4, 124)",
    margin: "-20px",
    padding: "20px",
    borderRadius: "00px 00px 20px 20px",
  }
  return (
    <div style={styleCard}>
      <div className="cardHeader">
        <h1>Nombre: {props.item.name}</h1>
      </div>
      <div className="cardBody">
        <p>Precio: {props.item.precio}</p>
        <img src={props.item.image} />
      </div>
      {quantityToAdd === true ? (
        <Link to="/cart">
          <Button
            type="primary"
            variant="outlined"
            color="primary"
            className="buttonCount"
          >
            Ir al Carrito
          </Button>
          
        </Link>
      ) : (
        <>
        <ItemCounter
          stock={5}
          initial={1}
          onAdd={(count) => {
            setQuantityToAdd(true);
            
            Cart.addToCart(props.item, count);
          }}
        />
      </>
      )}
    </div>
  );
}
