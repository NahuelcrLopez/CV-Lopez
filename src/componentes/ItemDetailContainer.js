import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CartWidget from "./CartWidget";
import { getFireStore } from "../firebase";
export default function ItemDetailContainer() {

  
    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
      const db = getFireStore();
      const itemCollection = db.collection("items");
      const item = itemCollection.doc(id);
      item.get().then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data(),
        });
      });
    }, [id]);

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
