import React, { useState, useEffect } from "react";

export default function ItemCounter({initial,stock,onAdd}) {
  const [count, setCount] = useState(initial);
  const addCount = () => {
    if (stock > 1 && count<stock) {
     //setCount se usa para modificar el count
      setCount(count + 1);
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
  useEffect(()=>{},[count]);
  return (
    <div>
      <button onClick={addCount}> + </button>
      <p>{count}</p>
      <button onClick={restar}> - </button>​
      <button onClick={()=>{onAdd(count)}}> Agregar al carro </button>
    </div>
  );
}
