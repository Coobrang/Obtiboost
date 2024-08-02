import React from "react";
import "./Customers.css";

import brand1 from "../../../assets/brand-5-1.png";
import brand2 from "../../../assets/brand-5-2.png";
import brand3 from "../../../assets/brand-5-3.png";
import brand4 from "../../../assets/brand-5-4.png";
import brand5 from "../../../assets/brand-5-5.png";
import brand6 from "../../../assets/brand-5-6.png";


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Customers = () => {
  return (
    <div className="slider">
        <div className="title">
            <h4>Trusted by the big ones, loved by everyone</h4>
        </div>

        <div className="box-container">
        <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={brand5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={brand6} alt="" /></SwiperSlide>
        </Swiper>
        </div>
    </div>
  );
};

export default Customers;
