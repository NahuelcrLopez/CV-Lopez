import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
    const Data = [
        {
          id: "2",
          name: "Pepe",
          status: "nuevo",
          precio: 343,
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
          id: "3",
          name: "Juan El carpintero",
          status: "nuevo",
          precio: 2343,
          image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
          id: "4",
          name: "El chapulin colorado",
          status: "usado",
          precio: 243,
          image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
      ];
    const [item, setItem] = useState({});

    const { id } = useParams();
    const getItems = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 2000);
    });



  useEffect(() => {
    getItems().then((dataContentResolve) => {
      dataContentResolve.filter((el) => {
        if (el.id === id) {
          setItem(el);
        } else {
        }
      });
    });
  }, []);

    console.log(item)
    return (
    <div>
        <ItemDetail 
        item={item}
        name={item.name}
        src={item.image}
        />
    </div>
    )
}
