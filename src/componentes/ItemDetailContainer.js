import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});

    const { id } = useParams();
    useEffect(() =>{
        const Detail = {
            id: 1,
            name: "Pepe",
            status: "nuevo",
            precio: 343,  
        };
        const getItem =() =>{
            return new Promise ((Res, Rej) => {
                setTimeout(() => Res(Detail), 2000)
            })
    
        }
        getItem().then((success) => setItem(success)).catch(
            (error) => error)
    }, [])
    console.log(item)
    return (
    <div>
        <ItemDetail item={item}/>
    </div>
    )
}
