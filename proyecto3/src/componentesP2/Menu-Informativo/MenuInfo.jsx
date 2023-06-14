import React from "react";
import "../Menu-Informativo/menu-Inf.css";
function MenuInfo() {
  return (
    <div className="m-container">
      <div className="m-items">
        <div className="m-item">
        <div className="m-barras1"></div>
          <button>
            <img src="../../src/assets/colegio-1.png" alt="" />
            <span>Decanato</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/comentarios-1.png" alt="" />
            <span> Consejo de Decanato</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/direccion-1.png" alt="" className="m-direcciones" />
            <span > Direcciones</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/departamento-1.png" alt="" />
            <span> Departamentos</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/Group-1.png" alt="" />
            <span> Coordinaciones</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/Group.png" alt="" />
            <span> Unidades</span>
          </button>
        </div>
        <div className="m-item">
          <button>
            <img src="../src/assets/comision-1.png" alt="" />
            <span> Comisiones</span>
            
        
          </button>
          <div className="m-barras2"></div>
        </div>
      </div>
    </div>
  );
}
export default MenuInfo;
