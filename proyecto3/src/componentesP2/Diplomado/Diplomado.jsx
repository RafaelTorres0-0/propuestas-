import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./SliderD.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Diplomado = () => {
  return (
    <section className="d-wrapper">
      <div className="d-container">
        <div className="d-title">Cursos, Diplomados y Certificaciones</div>
       
        <Swiper className="d-mySwiper">
       
          <SliderButtons />
          <SwiperSlide className="d-swipperS">
            <div className="d-card">
              <img src="../src/assets/foto-principal.png" alt="" />
              <div className="d-descripcion">
              Diplomado en Gestión del desarrollo de software
            </div>
            </div>
            
            
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="d-card">
              <img src="../src/assets/foto-principal.png" alt="" />
              <div className="d-descripcion">
              Diplomado en Gestión del desarrollo de software
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-card">
              <img src="../src/assets/foto-principal.png" alt="" />
              <div className="d-descripcion">
              Diplomado en Gestión del desarrollo de software
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-card">
              <img src="../src/assets/foto-principal.png" alt="" />
              <div className="d-descripcion">
              Diplomado en Gestión del desarrollo de software
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Diplomado;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="r-buttons">
      <div className="d-left">
        <button onClick={() => swiper.slidePrev()}>&lt;</button>
      </div>
      <div className="d-rigth">
        <button onClick={() => swiper.slideNext()}>&gt;</button>
      </div>
    </div>
  );
};
