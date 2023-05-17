import React from "react";
import styles from "./modules/service.module.css";

function Servicio(){
    return(
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={`${styles.item} ${styles.c1}`}>SEDUCLA</div>
                <div className={`${styles.item} ${styles.c2}`}>BIBCyT</div>
                <div className={`${styles.item} ${styles.c3}`}>CTIC</div>
                <div className={`${styles.item} ${styles.c4}`}>Registro Academico</div>
            </div>
        </div>   
    );
}

export default Servicio;