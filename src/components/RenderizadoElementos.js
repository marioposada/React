import React, {Component} from "react";

export default class RenderizadoElementos extends Component {
constructor(props){
    super(props);
this.state = {
    estaciones: ["Primaver","verano","otoño","invierno"]
}

}

    render()
    {
return(
    <div>
        <h2>REnderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
            {
                this.state.estaciones.map((el,index)=> <li key={index}>{el}</li>)
            }
        </ol>
    </div>
)
    }
}