import React from 'react'

export default function Item(props) {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.precio}</p>
            <p>{props.src}</p>
        </div>
    )
}