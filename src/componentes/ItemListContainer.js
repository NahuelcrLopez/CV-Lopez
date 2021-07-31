import React,{useEffect,useState} from "react";
import { useParams} from "react-router-dom";
import ItemCounter from "./ItemCounter";
import ItemList from "./ItemList";
import { getFireStore } from "../firebase";
export default function ItemListContainer(props) {

  const Data = [
    {
      id: 2,
      name: "Pepe",
      status: "nuevo",
      precio: 343,
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Juan El carpintero",
      status: "nuevo",
      precio: 2343,
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "El chapulin colorado",
      status: "usado",
      precio: 243,
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
  ];
  const [dataContent, setDataContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();
  useEffect(() => {
    const db = getFireStore();
    const items = db.collection("items");
    items
      .get()
      .then((querySnapshot) => {
        setLoading(false);
        if (querySnapshot.size === 0) {
          // setIsEmpty(true);
          console.log("es verdadero")
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          if (!categoryId) {
            setDataContent(data);
          } else {
              const filterCategory = data.filter(
                (item) => item.categoryId === categoryId
              );
              setDataContent(filterCategory);
          }
        }
      })
      .catch((error) => console.log("Firestore error:", error));
  }, [categoryId]);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ItemCounter initial={1} stock={5} onAdd={(count) => alert("se agrego"+ count)} />
      <h1>{props.Bienvenida}</h1>
      <ItemList resultado={dataContent}/>
    </div>
  );
}
