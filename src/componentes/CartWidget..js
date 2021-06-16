import React from 'react'

export default class CartWidget extends React.Component{
    state = {
        contador: 1, 
    }

    componentDidMount(){
        console.log("renderizado");
        
    }
    componentDidUpdate(){
        console.log("hola ya me actualizo ", this.state.contador);
    }
    sumar = ()=> {
        this.setState({contador : this.state.contador + 1});
    }
    restar = ()=> {
        this.setState({contador : this.state.contador - 1});
    }
    render(){
        return(
            <div>
                <h1>Seleccione el item deseado</h1>
                <button onClick={this.sumar}> + </button>
                <button onClick={this.restar}> - </button>
                <br />
                {this.state.contador}
            </div>
        )
    }
}
