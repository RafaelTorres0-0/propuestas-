import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Propuesta1 from './propuesta1';
import Propuesta2 from "./propuesta2";
import Propuesta3 from "./propuesta3";

function Ruta() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/p2" element={<Propuesta2 />} />
        <Route path="/p3" element={<Propuesta3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Ruta;
