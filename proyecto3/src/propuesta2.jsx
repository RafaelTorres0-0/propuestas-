import React from 'react';
import NavbarP2 from './componentesP2/NavbarP2';
import SliderP2 from './componentesP2/sliderP2';
import MenuInfo from './componentesP2/MenuInfo';
import Carreras from './componentesP2/Carreras';
import Postgrado from './componentesP2/Postgrado';
import Servicio from './componentesP2/Servicio';
import Diplomado from './componentesP2/Diplomado';
import Otros from './componentesP2/Otros';
import FooterP from './componentesP2/FooterP';

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
