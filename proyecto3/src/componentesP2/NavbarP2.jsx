import React from "react";
import styles from "./modules/navbar.module.css";

function NavbarP2() {
  return (
    <div className={styles.nav}>
      
      <div className={styles.logos}>
          <img src="../src/assets/dcyt.png" alt="" className={styles.dcyt}/>
          <img src="../src/assets/UCLA-Logo.png" alt=""  className={styles.ucla} />
        </div>

      <div className={styles.items}>
        

        <button className={`${styles.item} ${styles.inicio}`}>Inicio</button>
        <button className={styles.item}>Carreras</button>
        <button className={styles.item}>Postgrados</button>
        <button className={styles.item}>Servicios</button>
        <button className={styles.item}>Cursos</button>
        <button className={styles.item}>Otros</button>
        <div className={styles.barra}></div>
        <button className={styles.perfil}>
          <img src="../src/assets/icon-perfil.png" alt="perfil" />
        </button>
        <button class="menu-btn">
        <button class="menu-btn">&#9776;</button>
        </button>
      </div>
    </div>
  );
}

export default NavbarP2;
