import React, { Component } from 'react'

export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador:0,
        };
        // setInterval(()=>{
        //     this.setState({
        //         contador:this.state.contador +1,
        //     })   //Usamos setState para cambiar el estado
        // },1000)
        
        this.sumar = this.sumar.bind(this); //enlazamos el this para usarlo
        this.restar = this.restar.bind(this);
    }
    sumar(e) {
        console.log(this);
        this.setState({
            contador:this.state.contador +1,
        })
    }
    restar(e) {
        this.setState({
            contador:this.state.contador -1,
        })
    }
    render() {
        return (
            <div>   
                <p>{this.state.contador}</p>
                <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}
