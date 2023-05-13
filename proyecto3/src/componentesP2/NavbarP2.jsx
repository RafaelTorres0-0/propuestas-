import React from "react";
import styles from "./modules/navbar.module.css";

function NavbarP2() {
  return (
    <div className={styles.nav}>
      <div className={styles.logos}>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className={styles.items}>
        <div className={`${styles.item} ${styles.inicio}`}>Inicio</div>
        <div className={styles.item}>Carreras</div>
        <div className={styles.item}>Postgrados</div>
        <div className={styles.item}>Servicios</div>
        <div className={styles.item}>Cursos</div>
        <div className={styles.item}>Otros</div>
      </div>
      <div className={styles.perfil}>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default NavbarP2;
