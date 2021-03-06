import React,{Component} from "react";


export  class EventosES6 extends Component {
    constructor(props){
        super(props);

        this.state = {
contador: 0
        }
        this.sumar =this.sumar.bind(this)
        this.restar =this.restar.bind(this)
    }

    sumar(e) {
        console.log("Sumando");
        console.log(this);
        this.setState({
    contador:  this.state.contador + 1,
});
    }

    restar(e) {
        console.log(this.sumar)
        console.log("Sumando");
        console.log(this);
        this.setState({
    contador:  this.state.contador - 1,
});
    }


  
render(){
    return(
            <div>
                <h2>Eventos en componentes de clase</h2>
                <p><b>{this.state.contador}</b></p>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>


                </nav>
            </div>
    )
}

}

export  class EventosES7 extends Component {
    state = {
contador: 0
        }
       sumar = (e) => {
        console.log("Sumando");
        console.log(this);
        this.setState({
    contador:  this.state.contador + 1,
});
    }

    restar= (e) =>{
        console.log(this.sumar)
        console.log("Sumando");
        console.log(this);
        this.setState({
    contador:  this.state.contador - 1,
});
    }


  
render(){
    return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <p><b>{this.state.contador}</b></p>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>


                </nav>
            </div>
    )
}

}

const Boton = ({ myOnClick }) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
  );

export class MasSobreEventos extends Component {
    
    handleClick = (e) => {
        console.log(e)
        console.log(e.target)
    }

    render(){
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={this.handleClick}>Saludar</button>
                <Boton myOnClick={(e) => this.handleClick(e,"hola")}/>
            </div>
        )
    }
}