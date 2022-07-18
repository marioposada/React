import React, { useState } from "react";

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });

  };

  const handleSubmit = (e)=> {
    e.preventDefault()
    alert("holiiiiiiisss")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="name"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elije tu lenguaje favorito</p>
        <label htmlFor="lenguaje">Vanilla</label>
        <input
          type="radio"
          id="Vanilla"
          name="lenguaje"
          value="Vanilla"
          onChange={handleChange}
        />
        <label htmlFor="lenguaje">React</label>
        <input
          type="radio"
          id="React"
          name="lenguaje"
          value="React"
          onChange={handleChange}
        />
        <label htmlFor="lenguaje">Vue</label>
        <input
          type="radio"
          id="Vue"
          name="lenguaje"
          value="Vue"
          onChange={handleChange}
        />
        <p>Elije tu comida favorita</p>
        <select
          name="comida"
          id=""
          onChange={handleChange}
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
          onChange={handleChecked}
        />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <br />
        <button type="submit"></button>
      </form>
    </>
  );
}
