import React from "react";
import styles from "./modules/car.module.css";

function Carreras() {
  return (
    <div className={styles.container}>
      <div className={styles.title}> 
      <p>CARRERAS</p>
      </div>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Analisis de Sistemas</div>
        </div>

        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería en Informática</div>
        </div>

        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería en Producción</div>
        </div>

        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería Telemática</div>
        </div>

        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Licenciatura en Física</div>
        </div>

        <div className={styles.item}>
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Licenciatura en Matemáticas</div>
        </div>
      </div>
    </div>
  );
}

export default Carreras;
