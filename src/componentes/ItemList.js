import React from 'react'
import Item from './Item'
export default function ItemList(data) {
    const resultData = data.resultado;
    return (
        <div>
            {resultData.map((el)=>(
               <Item name={el.name}/> 
            ))}
        </div>
    )
}
