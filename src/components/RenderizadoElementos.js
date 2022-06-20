import React, {Component} from "react";
import data from "../helpers/data.json";


function ElementosLista(props){
        return(
            <li>
                <a href={props.el.web}>{props.el.name}</a>
            </li>
    )
    
}

export default class RenderizadoElementos extends Component {
constructor(props){
    super(props);
this.state = {
    estaciones: ["Primaver","verano","otoño","invierno"]
}

}

    render()
    {
        console.log(data);
        
return(
    <div>
        <h2>REnderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
            {
                this.state.estaciones.map((el,index)=> <li key={index}>{el}</li>)
            }
        </ol>
        <h3>Frameworks FrontEnd Javascript</h3>
        <ul>
            {data.frameworks.map((el,index)=> <ElementosLista key={index} el={el}/>)}
        </ul>
    </div>
)
    }
}