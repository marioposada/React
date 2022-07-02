import React, {Component} from "react";

export default class Padre extends Component{
    state = {
        contador:0
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador +1,
        })

    }
render(){
    return(
<h2>Comunicacion</h2>,
<Hijo mensaje="Mensaje para el hijo 1"/>
    )

    }
}

function Hijo (props){
return <h3> {props.mensaje}</h3>
}