import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CartWidget from "./CartWidget";
import { getFireStore } from "../firebase";
export default function ItemDetailContainer() {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const styleCard = {
    margin: "0 auto",
    background: "rgba(54, 0, 204, 0.555)",
    color: "rgb(255, 255, 255)",
    width: "400px",
    padding: "20px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.377)",
    borderRadius: "20px",
  };
  const cardHeader = {
    background: "crimson",
    margin: "-20px",
    padding: "20px",
    borderRadius: "20px 20px 0px 0px",
  };
  const cardBody = {
    background: "rgb(40, 4, 124)",
    margin: "-20px",
    padding: "20px",
    borderRadius: "00px 00px 20px 20px",
  };

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

  return (
    <div>
      <ItemDetail item={item} name={item.name} src={item.image} />
    </div>
  );
}
