import React from "react";
import "./post.css";

function Postgrado() {
  return (
    <div className="p-container">
      <h4 className="p-titulo">POSTGRADOS</h4>

      <div className="p-items">
        <div className="p-item   c1">Información General</div>
        <div className="p-item   c2"> Maestría en Ciencias: Matemática</div>
        <div className="p-item   c3">
        <p> Maestría en Ciencias: Física Matemática</p> 
        </div>
        <div className="p-item   c4"> Maestría en Ciencias: Optimización</div>
        <div className="p-item   c5">
          Maestría en Ciencias de la Computación: Ingeniería de Software
        </div>
        <div className="p-item   c6">
          Maestría en Ciencias de la Computación: Inteligencia Artificial
        </div>
        <div className="p-item   c7">
          Maestría en Ciencias de la Computación: Redes de Computadores
        </div>
        <div className="p-item   c8">
          Especialización en Sistemas de Información
        </div>
      </div>
    </div>
  );
}

export default Postgrado;
