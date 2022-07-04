import React, { Component } from 'react';

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
            
        </figure>
    )
}

export default class AjaxApis extends Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
       let url="https://pokeapi.co/api/v2/pokemon/"
       fetch(url)
       .then(res => res.json())
       .then(json => {
        console.log(json);
        json.results.forEach(element => {
            fetch(element.url)
            .then(res => res.json())
            .then(json =>{
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
            })
                
        });





       })
    }
    render(){
        return(
            <>
            <h2>Peticiones asincronas en componentes de clases </h2>
            </>
        )
    }
}