import React, { Component } from 'react'

export default class CicloVida extends Component {
    constructor(props){
        super(props);
        console.log(0,"Se inicializa el componente pero aun no esta en el Dom");

        this.state = {
            Hora: new Date().toLocaleTimeString(),
        };

        this.temporizador = null;
    }
    tictac =() =>{
        this.temporizador = setInterval(()=>{
            this.setState({
                Hora: new Date().toLocaleTimeString(),
            });
        },1000);
    };
    iniciar = ()=>{
        this.tictac();
    };

    detener = ()=>{
        clearInterval(this.temporizador);
    };

    render() {
        console.log(4,"El componente se dibuja por cambios en el DOM")
        return (
            <div>
                <h2>Ciclo de vida de los componentes</h2>
                <h3>{this.state.Hora}</h3>
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }
}
