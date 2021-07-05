import React from 'react'
import "./style/NavBarStyle.css";
export default function CartWidget(props) { //hereda el elemnto del padre
    return (
        <div>
            <img src={props.carticon} alt=""  />
            {/* <p>{props.prueba.nombre}</p> */}
        </div>
    )
}


