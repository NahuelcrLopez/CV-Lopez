import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function ItemDetailContainer() {
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
