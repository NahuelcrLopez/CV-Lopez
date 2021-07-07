import React from 'react'
import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.precio}</p>
            <img src={props.src} />
            <Link to={`/itemDetail/${props.id}`}>
                <spam>ir al producto</spam>
            </Link>

        </div>
    )
}