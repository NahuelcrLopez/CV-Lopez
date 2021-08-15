import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
export default function ItemCounter({initial,stock,onAdd}) {



  const [count, setCount] = useState(initial);
  const addCount = () => {
    if (stock > 1 && count<stock) {
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
      <span className='buttonCount'>
      <Button onClick={addCount}> + </Button>
      </span>
      <p>{count}</p>
      <Button className='buttonCount' onClick={restar}> - </Button>​
      <Button type="primary" variant="outlined" color="primary" className="buttonCount"onClick={()=>{onAdd(count)}}> Agregar al carro </Button>
      
    </div>
  );
}
