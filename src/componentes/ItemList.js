import React from 'react'
import Item from './Item'
export default function ItemList(data) {
    const resultData = data.resultado;
    return (
        <div>
            {resultData.map((el)=>(
               <Item
               src={el.image}
               name={el.name}
               precio={el.precio}
               id={el.id}
             />
     
            ))}
        </div>
    )
}
