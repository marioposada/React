import React from "react";
import "../components/Estilos.css";
import moduleStyle from "../components/Estilos.module.css"
import "../components/Estilos.scss"

export default function Estilos() {

  let myStyle = {
    borderRadius: ".5rem",
    margin: "3rem auto",
    maxWidth: "50%",

  };

  return (
    <section className="estilos">
      <h2> Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en la hoja de estilos CSS externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en la hoja de estilos CSS en linea
      </h3>
      <h3 className="bg-react" myStyle={myStyle}>
        Estilos en la hoja de estilos CSS en linea
      </h3>
      <h3 className={moduleStyle.error}>
        Estilos con módulos - error
      </h3>
      <h3 className={moduleStyle.success}>
        Estilos con módulos - success
      </h3>
      <h3 className="bg-sass">
        Estilos con módulos - success
      </h3>
    </section>
  );
}
