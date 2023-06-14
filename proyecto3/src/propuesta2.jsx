import React from 'react';
import NavbarP2 from './componentesP2/Navbar/NavbarP2';
import SliderP2 from './componentesP2/Slider-Principal/SliderP2';
import MenuInfo from './componentesP2/Menu-Informativo/MenuInfo';
import Carreras from './componentesP2/Carerras/Carreras';
import Postgrado from './componentesP2/Postgrado/Postgrado';
import Servicio from './componentesP2/Servicios/Servicio';
import Diplomado from './componentesP2/Diplomado/Diplomado';
import Otros from './componentesP2/Otros/Otros';
import FooterP from './componentesP2/Footer/FooterP'


function About() {
  return (
   <>
   <NavbarP2/>
   <SliderP2/>
   <MenuInfo/>
   <Carreras/>
   <Postgrado/>
   <Servicio/>
   <Diplomado/>
   <Otros/>
   <FooterP/>
   </>
  )
}

export default About;
