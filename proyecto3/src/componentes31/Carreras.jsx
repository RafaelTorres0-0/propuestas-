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
              <h1>Jon Doe</h1>
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
              <h1>John Doe</h1>
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
              <h1>John Doe</h1>
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
            <h1>John Doe</h1>
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
              <h1>John Doe</h1>
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
              <h1>John Doe</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carreras;
