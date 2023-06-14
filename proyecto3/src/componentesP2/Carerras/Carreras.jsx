import React from "react";
import "./carerra.css";

function Carreras() {
  return (
    <div className="c-container">
      <div className="c-title">
        <p>CARRERAS</p>
      </div>
      <div className="c-items">
        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="c-carrera">Analisis de Sistemas</div>
          </button>
        </div>

        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="carrera">Ingeniería en Informática</div>
          </button>
        </div>
        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="c-carrera">Ingeniería en Producción</div>
          </button>
        </div>

        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="c-carrera">Ingeniería Telemática</div>
          </button>
        </div>
        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="carrera">Licenciatura en Física</div>
          </button>
        </div>
        <div className="c-item">
          <button>
            <img src="../src/assets/dcyt.png" alt="" />
            <div className="c-carrera">Licenciatura en Matemáticas</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carreras;
