import React from "react";
import './Footer.css'

function FooterP(){
    return(
        <div className="f-container">

           <div className="f-calendario">
           <img src="../src/assets/calendario.png" alt="perfil" />
           </div>
           <div className="f-redes">
                <div className="f-ig">
                <img src="../src/assets/instagram.png" alt="perfil" />
                </div>
                <div className="f-twitter">
                <img src="../src/assets/twitter.png" alt="perfil" />
                </div>
                <div className="f-telefono">
                <img src="../src/assets/phone.png" alt="perfil" />
                 <span>0251-4354820</span> 
                </div>
           </div>
        </div>
    );
}

export default FooterP;