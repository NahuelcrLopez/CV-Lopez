import React from "react";
import ItemCounter from "./ItemCounter";

export default function ItemListContainer(props) {
  return (
    <div>
      <ItemCounter  initial={1} stock={5} onAdd={() => 
      alert("se agrego")} />
      <h1>{props.Bienvenida}</h1>
    </div>
  );
}
