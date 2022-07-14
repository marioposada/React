import React, { useRef } from "react";

export default function Referencias() {
  let refMenuBtn = useRef();
  let refMenu = useRef();

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.texContent === "Menu") {
      refMenuBtn.current.texContent = "Cerrar";
      refMenu.current.styles.display = "block";
    } else {
      refMenuBtn.current.texContent = "Menu";
      refMenu.current.styles.display = "none";
    }
  };
  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav ref={refMenu} style={{ display:"none" }}>
        <a href="#1">Seccion 1</a>
        <br />
        <a href="#2">Seccion 2</a>
        <br />
        <a href="#3">Seccion 3</a>
        <br />
        <a href="#4">Seccion 4</a>
        <br />
        <a href="#5">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}
