import React, { useContext, useState, useEffect } from "react";
import {CartContext} from "./CartContext";
import Table from "react-bootstrap/Table";
export default function CartTable() {
  const { cartItems, widgetNumber, setWidgetNumber, removeItem } = useContext(
    CartContext
  );
  console.log(cartItems)
  const handlesumar = () => {
   return cartItems.reduce((acumulador, item) => {
    return acumulador += item.item.precio * item.count;
  }, 0);

};
  return cartItems.length === 0 ? (
    <p>No hay productos</p>
  ) : (
    <>
    {cartItems.map((name)=> <span>{name.item.name}</span> )}
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Eliminar Items</th>
        </tr>
      </thead>
      <tbody>
        { cartItems.map((data) => (
              <tr>
                <td>{data.item.id}</td>
                <td>{data.item.name}</td>
                <td>{data.count}</td>
                <td>{data.item.precio * data.count}</td>
                <td>
                  <button
                    onClick={() => {
                      removeItem(data.item.id);
                      setWidgetNumber(widgetNumber - data.count);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        <tr>
          <td>Precio Total</td>
          <td>{handlesumar()}</td>
        </tr>
      </tbody>
    </Table>
    </>
  );

}