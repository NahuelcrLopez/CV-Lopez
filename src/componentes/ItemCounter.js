import React, { useState } from "react";

export default function ItemCounter(props) {
  const [count, setCount] = useState(props.initial);
  const addCount = () => {
    if (props.stock > 1 ) {
      if (count< props.stock){ //setCount se usa para modificar el count
        setCount(count + 1);
      }else {
        alert("no hay stock suficiente");
    } 
    }else {
      alert("No hay stock");
    }
  };
  const restar =()=>{
    if(count>1){
      setCount(count - 1)
    }else{
      alert("no se puede mas");
    }
  }
  return (
    <div>
      <button onClick={addCount}> + </button>
      {count}
      <button onClick={restar}> - </button>​
      <button onClick={props.onAdd}> Agregar al carro </button>
    </div>
  );
}
