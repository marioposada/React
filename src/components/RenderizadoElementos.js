import React, {Component} from "react";
import data from "../helpers/data.json";


function ElementosLista(props){
        return(
            <li>
                <a href={props.el.web} target="_blank" rel="noopener">{props.el.name} </a>
            </li>
    )
    
}

function ElementoLista2(props){
    return(
        <li>
           <p>{props.msg}</p>
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
        <p>{this.props.msg}</p>
        <ol>
            {
                this.state.estaciones.map((el)=> <li key={el.id}>{el}</li>)
            }
        </ol>
        <h3>Frameworks FrontEnd Javascript</h3>
        <ul>
            {data.frameworks.map((el,index)=> <ElementosLista key={index} el={el}/>)}
            <ElementoLista2 msg="Nuevo mensaje"/>
        </ul>
    </div>
)
    }
}