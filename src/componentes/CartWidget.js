import React from 'react'
import "./style/NavBarStyle.css";
export default function CartWidget(props) { 
    return (
        <div>
            <img src={props.carticon} alt=""  />
        </div>
    )
}


