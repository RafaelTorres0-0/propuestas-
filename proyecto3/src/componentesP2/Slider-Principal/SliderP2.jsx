import React from "react";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import "./slider.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function SliderP2() {
  return (
    <section className="s-wrapper">
      <div className="s-container">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
        >
          <SwiperSlide>
            <div className="s-card">
              <img src="../src/assets/foto-principal.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="s-card">
              <img src="../src/assets/foto-principal.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="s-card">
              <img src="../src/assets/foto-principal.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="s-card">
              <img src="../src/assets/foto-principal.png" alt="" />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}

export default SliderP2;
