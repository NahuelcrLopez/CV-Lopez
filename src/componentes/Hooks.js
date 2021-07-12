import React, { useEffect, useState } from "react";

export default function Hooks() {
    const [valor,setValor] = useState(0);
    // useEffect(() =>{
    //     window.addEventListener
    // })
    return ( 
    <div>
        <p>El componente es {valor}</p>
        <button onClick={() => setValor(valor + 1)}>Aumentar valor</button>   
    </div>)
}