import React, { useState } from "react";

export default function Formularios() {
  const [name, setName] = useState("");

  return (
    <>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}
