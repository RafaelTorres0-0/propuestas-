import styles from "./modules/car.style.css";

function Carreras() {
  return (
    <div className="container">
      <div className="title"> 
      <p>CARRERAS</p>
      </div>
      <div className="items">
        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className="carrera">Analisis de Sistemas</div>
        </div>

        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className="carrera">Ingeniería en Informática</div>
        </div>

        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className="carrera">Ingeniería en Producción</div>
        </div>

        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className={styles.carrera}>Ingeniería Telemática</div>
        </div>

        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className="carrera">Licenciatura en Física</div>
        </div>

        <div className="item">
          <img src="../src/assets/dcyt.png" alt="" />
          <div className="carrera">Licenciatura en Matemáticas</div>
        </div>
      </div>
    </div>
  );
}

export default Carreras;
