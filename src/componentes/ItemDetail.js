import React from 'react'

export default function ItemDetail(props) {
    return (
        <div>
            {/* <p>{props.item.name}</p> */}
            <p>{props.name}</p>
            <p>{props.precio}</p>
            <img src={props.src} />
        </div>
    )
}
