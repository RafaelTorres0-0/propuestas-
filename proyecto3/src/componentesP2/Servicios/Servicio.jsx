import React from "react";
import "./service.css";

function Servicio() {
  return (
    <div className="se-container">
      <div className="se-color">
        <h4 className="se-titulo">SERVICIOS</h4>
        <div className="se-items">
          <div className=" se-item se-c1"> <img src="../src/assets/seducla/seducla.jpg" alt="" /> <span>SEDUCLA</span> </div>
          <div className=" se-item se-c2"><img src="../src/assets/biblioteca/biblioteca.jpg" alt="" /><span> BIBCyT</span></div>
          <div className=" se-item se-c3"><span> CTIC</span></div>
          <div className=" se-item se-c4"> <img src="../src/assets/registro-Academico/registro.jpeg" alt="" /> <span> Registro Academico</span>  </div>
        </div>
      </div>
    </div>
  );
}

export default Servicio;
