import React,{useEffect,useState} from "react";
import ItemCounter from "./ItemCounter";
import ItemList from "./ItemList";

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

  useEffect(() => {
    setLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 3000);
    }).then((dataContentResolve) => {
      setDataContent(dataContentResolve);
      // console.log(dataContentResolve);
      setLoading(false);
    });
  }, []);


  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <ItemCounter initial={1} stock={5} onAdd={(count) => alert("se agrego"+ count)} />
      <h1>{props.Bienvenida}</h1>
      <ItemList resultado={dataContent}/>
    </div>
  );
}
