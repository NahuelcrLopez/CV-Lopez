import React,{useEffect,useState} from "react";
import { useParams} from "react-router-dom";
import ItemList from "./ItemList";
import { getFireStore } from "../firebase";
export default function ItemListContainer(props) {

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
      <h1>{props.Bienvenida}</h1>
      <ItemList resultado={dataContent}/>
    </div>
  );
}
