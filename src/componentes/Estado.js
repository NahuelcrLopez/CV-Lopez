import React, { Component } from 'react'

export default class estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }
        // setInterval(()=>{
        //     this.setState({ //el setState cambia el estado
        //         contador:this.state.contador + 1
        //     });
        // },1000);
    }
    render() {
        return (
            <div>
                <h2>el state</h2>
                <p>{this.state.contador}</p>
            </div>
        );
    }
}
