import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';
import Testimonialcards from './Testimonialcards';

const Slidercard = () => {
  return (
    <div className="swiper-container">
      <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000, // Slide delay in milliseconds
          disableOnInteraction: false, // Keeps autoplay running even when user interacts with the slider
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Testimonialcards />
        </SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
        <SwiperSlide><Testimonialcards /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slidercard;
