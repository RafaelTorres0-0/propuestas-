import React from "react";
import styles from "./modules/footer.module.css";

function FooterP(){
    return(
        <div className={styles.container}>

           <div className={styles.calendario}>
           <img src="../src/assets/calendario.png" alt="perfil" />
           </div>
           <div className={styles.redes}>
                <div className={styles.ig}>
                <img src="../src/assets/instagram.png" alt="perfil" />
                </div>
                <div className={styles.twitter}>
                <img src="../src/assets/twitter.png" alt="perfil" />
                </div>
                <div className={styles.telefono}>
                <img src="../src/assets/phone.png" alt="perfil" />
                0251-4354820
                </div>
           </div>
        </div>
    );
}

export default FooterP;