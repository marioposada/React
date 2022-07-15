import React, { useState } from "react";

export default function Formularios() {
  const [name, setName] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [comida, setComida] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se envio con exito");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Elije tu lenguaje favorito</p>
        <label htmlFor="lenguaje">Vanilla</label>
        <input
          type="radio"
          id="Vanilla"
          name="lenguaje"
          value="Vanilla"
          onChange={(e) => setLenguaje(e.target.value)}
        />
        <label htmlFor="lenguaje">React</label>
        <input
          type="radio"
          id="React"
          name="lenguaje"
          value="React"
          onChange={(e) => setLenguaje(e.target.value)}
        />
        <label htmlFor="lenguaje">Vue</label>
        <input
          type="radio"
          id="Vue"
          name="lenguaje"
          value="Vue"
          onChange={(e) => setLenguaje(e.target.value)}
        />
        <p>Elije tu comida favorita</p>
        <select
          name="comida"
          id=""
          onChange={(e) => setComida(e.target.value)}
          defaultValue
        >
          <option value="">---</option>
          <option value="milanesa">milanesa</option>
          <option value="pollo">pollo</option>
          <option value="lomito">lomito</option>
          <option value="hamburguesa">hamburguesa</option>
        </select>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <br />
        <button type="submit"></button>
      </form>
    </>
  );
}
