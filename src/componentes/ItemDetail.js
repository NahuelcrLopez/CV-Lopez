import React from 'react'

export default function ItemDetail(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.precio}</p>
            <img src={props.item.image} />
        </div>
    )
}
