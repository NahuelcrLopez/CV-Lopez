import React, { useState } from 'react'
import ItemCounter from './ItemCounter';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function ItemDetail(props) {
    const [quantityToAdd, setQuantityToAdd] = useState(false);
    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.precio}</p>
            <img src={props.item.image} />
            {quantityToAdd === true ? (
                <Link to="/cart">
                  <Button type="primary"  variant="outlined" color="primary" className='buttonCount'>Ir al Carrito</Button>
                </Link>
              ) : (
                <ItemCounter
                  stock={5}
                  initial={1}
                  onAdd={(count) => {
                    setQuantityToAdd(true);
                    alert(`Se agregaron ${count} items`);
                  }}
                />
              )}
        </div>
    )
}
