import React from "react";
import styles from "./modules/menu-Inf.module.css";
function MenuInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <button className={styles.item}>
          <img src="../src/assets/colegio-1.png" alt="" />
         <div className={styles.nombre}>Decanato</div> 
        </button>
        <button className={styles.item}>
          <img src="../src/assets/comentarios-1.png" alt="" />
          <div className={`${styles.nombre} ${styles.consejo}`} >  Consejo de Decanato</div> 
        </button>
        <button className={styles.item}>
          <img src="../src/assets/direccion-1.png" alt="" />
          <div className={styles.nombre}>   Direcciones</div>
        </button>
        <button className={styles.item}>
          <img src="../src/assets/departamento-1.png" alt="" />
          <div className={styles.nombre}> Departamentos</div> 
        </button>
        <button className={styles.item}>
          <img src="../src/assets/Group-1.png" alt="" />
          <div className={styles.nombre}> Coordinaciones</div> 
        </button>
        <button className={styles.item}>
          <img src="../src/assets/Group.png" alt="" />
          <div className={styles.nombre}> Unidades</div> 
        </button>
        <button className={styles.item}>
          <img src="../src/assets/comision-1.png" alt="" />
          <div className={styles.nombre}> Comisiones</div> 
        </button>
      </div>
    </div>
  );
}
export default MenuInfo;
