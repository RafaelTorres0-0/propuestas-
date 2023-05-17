import styles from "./modules/car.module.css";
function Carreras() {
  return (
    <div className={styles.body}>
      <h4>Carreras</h4>
      <div className={styles.container}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`} >
              <h1>Analisis de Sistemas</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h2><a href="#InfoAnalisis">Info</a></h2>
              <hr />
              <h2><a href="#PensulAnalisis">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersAnalisis">others</a></h2>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`}>
              <h1>Ingenieria Informatica</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h4><a href="#InfoInformatica">Info</a></h4>
              <hr />
              <h2><a href="#PensulInformatica">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersInformatica">others</a></h2>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`}>
              <h1>Ingenieria en Produccion</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h4><a href="#InfoProduccion">Info</a></h4>
              <hr />
              <h2><a href="#PensulProduccion">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersProduccion">others</a></h2>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.container}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`}>
              <h1>Ingenieria en Telematica</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h4><a href="#InfoTelematica">Info</a></h4>
              <hr />
              <h2><a href="#PensulTelematica">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersTelematica">others</a></h2>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`}>
            <h1>Licenciatura en Fisica</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h4><a href="#InfoFisica">Info</a></h4>
              <hr />
              <h2><a href="#PensulFisica">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersFisica">others</a></h2>
            </div>
          </div>
        </div>
        <div className={styles.flipCard}>
          <div className={styles.flipCardInner}>
            <div className={`${styles.flipCardFront} ${styles.card}`}>
            <h1>Licenciatura en Matematicas</h1>
              <img src="../src/assets/dcyt.png" alt="Avatar" style={{ width: 300, height: 300 }} />
            </div>
            <div className={styles.flipCardBack}>
              <h4><a href="#InfoAnalisis">Info</a></h4>
              <hr />
              <h2><a href="#PensulAnalisis">Pemsul</a></h2>
              <hr/>
              <h2><a href="#OthersAnalisis">others</a></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carreras;
