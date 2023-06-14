import React, { useState } from "react";
import "./navbar.css";
import OutsideClickHandler from 'react-outside-click-handler';
function NavbarP2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="n-wrapper">
      <div className="n-container innerWhidth">
        <div className="n-logos">
          <img src="../src/assets/dcyt.png" alt="" width={100} />
          <div className="n-barra"></div>
          <img src="../src/assets/UCLA-Logo.png" alt="" width={100} />
        </div>
      <OutsideClickHandler onOutsideClick={()=>setMenuOpen(false)}>
        <div className="n-items" style={getMenuStyles(menuOpen)}>
          <div className="n-item">
            <button>Inicio</button>
          </div>
          <div className="n-item">
            <button className=" n-color">Carreras</button>
          </div>
          <div className="n-item">
            <button className=" n-color">Postgrados</button>
          </div>
          <div className="n-item">
            <button className=" n-color">Servicios</button>
          </div>
          <div className="n-item">
            <button className=" n-color">Cursos</button>
          </div>
          <div className="n-item">
            <button className=" n-color">Otros</button>
          </div>
          <div className="n-barra"></div>
          <button className="n-perfil">
            <img src="../src/assets/icon-perfil.png" alt="perfil" />
          </button>
        </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            width="34"
            height="34"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default NavbarP2;
