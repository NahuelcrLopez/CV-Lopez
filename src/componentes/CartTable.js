import React, {useContext,useState,useEffect} from 'react'
import CartContext from './CartContext'
import Table from 'react-bootstrap/Table'
export default function CartTable(){

  const {cartItems,widgetNumber,setWidgetNumber,removeItem} = useContext(CartContext)
  const DATA = cartItems
  const [SumTotal, setSumTotal] = useState(undefined);
  useEffect(() => {
    const handlesumar = () => {
      const sumar = DATA.map((data) => (data.price)).reduce((a, b) => {return a + b;
      }, 0);
      console.log(typeof cart)
      setSumTotal(sumar);
      console.log(SumTotal)
    }})
    
    return(
      
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
      <th>Eliminar Items</th>
    </tr>
  </thead>
  <tbody>
  {/* {DATA.length === 0?(console.log("no se cargo")) :( 
  // DATA.map((data) => (
              
        <tr>
        <td>{data.id}</td>
        <td>{data.item}</td>
        <td>{data.count}</td>
        <td>{(data.price)*(data.count)}</td>
        <td><button onClick={()=>{removeItem(data.id)
            setWidgetNumber(widgetNumber-(data.count))}} >X</button></td>
        </tr>
       ))
      )} */}
    <tr>
        <td>Precio Total</td>
        <td>{SumTotal}</td>
        </tr>
  </tbody>
</Table>
    )
}