import React, {Component} from "react";

export default class Padre extends Component{
render(){
    return(
<h2>Comunicacion</h2>,
<Hijo mensaje="Mensaje para el hijo 1"/>
    )

    }
}

function Hijo (props){
return <h2> {props.mensaje}</h2>
}