import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      tag="section"
      className="pt-[6.5rem]"
    >
      <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
          alt="Imagen 2"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
          alt="Imagen 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
          alt="Imagen 2"
        />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Hero;
