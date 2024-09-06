import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';
import Testimonialcards from './Testimonialcards';
import brand_one from "../img/brand-one.png"
import brand_two from "../img/brand-two.png"

const Brand_card = () => {
  return (
    <div className="swiper-container">
      <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        
        autoplay={{
          delay: 3000, // Slide delay in milliseconds
          disableOnInteraction: false, // Keeps autoplay running even when user interacts with the slider
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
            <div>
            <img src={brand_one} />
            </div>
         
        </SwiperSlide>
        <SwiperSlide><img src={brand_two} /></SwiperSlide>
        <SwiperSlide><img src={brand_one} /></SwiperSlide>
        <SwiperSlide><img src={brand_two} /></SwiperSlide>
        <SwiperSlide><img src={brand_one} /></SwiperSlide>
        <SwiperSlide><img src={brand_two} /></SwiperSlide>
        <SwiperSlide><img src={brand_one} /></SwiperSlide>
        <SwiperSlide><img src={brand_two} /></SwiperSlide>
        <SwiperSlide><img src={brand_one} /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Brand_card;
