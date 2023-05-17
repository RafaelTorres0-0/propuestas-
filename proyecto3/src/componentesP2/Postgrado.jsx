import React from "react";
import styles from "./modules/post.module.css";

function Postgrado() {
  return (
    <div className={styles.container}>
      <h4 className={styles.titulo}>POSTGRADOS</h4>

      <div className={styles.items}>
        <div className={`${styles.item} ${styles.c1}`}>Información General</div>
        <div className={`${styles.item} ${styles.c2}`}>Maestría en Ciencias: Matemática</div>
        <div className={`${styles.item} ${styles.c3}`}>
          Maestría en Ciencias: Física Matemática
        </div>
        <div className={`${styles.item} ${styles.c4}`}>Maestría en Ciencias: Optimización</div>
        <div className={`${styles.item} ${styles.c5}`}>
          Maestría en Ciencias de la Computación: Ingeniería de Software
        </div>
        <div className={`${styles.item} ${styles.c6}`}>
          Maestría en Ciencias de la Computación: Inteligencia Artificial
        </div>
        <div className={`${styles.item} ${styles.c7}`}>
          Maestría en Ciencias de la Computación: Redes de Computadores
        </div>
        <div className={`${styles.item} ${styles.c8}`}>
          Especialización en Sistemas de Información
        </div>
      </div>
    </div>
  );
}

export default Postgrado;
