import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propuesta1 from './propuesta1';
import Propuesta2 from "./propuesta2";
import Propuesta3 from "./propuesta3";
import Propuesta31 from "./propuesta31";

function Ruta() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Propuesta1/>} />
        <Route path="/p2" element={<Propuesta2/>}/>
        <Route path="/p3" element={<Propuesta3 />} />
        <Route path="/p31" element={<Propuesta31 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Ruta;
