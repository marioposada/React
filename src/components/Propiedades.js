/* eslint-disable no-unreachable */
import React from "react";
import PropTypes from "prop-types"

 function Propiedades (props) {
return(
    <div>
        <h2> {props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano? "Verdadero": "Falso"}</li>
            <li>{props.array.join(", ")}</li>
            <li>{props.objeto.nombre}</li>
            <li>{props.objeto.correo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.array.map(props.funcion)}</li>
            
        </ul>
    </div>
)



};

Propiedades.defaultProps = {
    porDefecto: "Las props"
}

Propiedades.propTypes ={
    numero: PropTypes.number

}

export default Propiedades;