import React from "react";
import styles from "./modules/car.module.css";

function Carreras() {
  return (
    <div className={styles.container}>
      <div className={styles.title}> 
      <p>CARRERAS</p>
      </div>
      <div className={styles.items}>
        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Analisis de Sistemas</div>
        </button>

        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería en Informática</div>
        </button>

        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería en Producción</div>
        </button>

        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería Telemática</div>
        </button>

        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Licenciatura en Física</div>
        </button>

        <button className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Licenciatura en Matemáticas</div>
        </button>
      </div>
    </div>
  );
}

export default Carreras;
