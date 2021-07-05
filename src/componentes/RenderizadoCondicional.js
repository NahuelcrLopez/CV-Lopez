import React, { Component } from 'react'

function Login(){
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state ={
            session:true, 
        };
    }
    render() {
        return (
            <div>
                <h2>RenderizadoCondicional </h2>
                {/* Si es true ejecuta login sino ejecuta logout */}
                {this.state.session?<Login /> : <Logout />}  
            </div>
        )
    }
}
