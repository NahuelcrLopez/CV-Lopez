import React from 'react'

export default function Propiedades(props) {
    return (
        <div>
            <h1>{props.saludo}</h1>
            <h2>{props.propiedadPorDefecto}</h2>
            <br />
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano}</li>
                <li>{props.arreglo}</li>
                <li>{props.objeto.nombre + "-"+ props.objeto.correo}</li>
            </ul>
        </div>
    )
}

//Esto hace un objeto que define propiedades por defecto
Propiedades.defaultProps ={
    propiedadPorDefecto: "Propiedad por defecto"
}