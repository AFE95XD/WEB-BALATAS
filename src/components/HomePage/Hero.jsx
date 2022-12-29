import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation={true}
      // loop={true}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      tag="section"
      className="pt-[6.5rem]"
    >
      <SwiperSlide>
        <div className="relative flex justify-start items-center">
          <div>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="absolute z-10 -mt-[6.5rem] ml-32 w-4/6">
            <h2 className="text-white font-bold text-7xl leading-[5rem]">
              Frenos Confiables, Seguridad Garantizada
            </h2>
            <p className="text-white font-normal text-2xl leading-[5rem] mb-5">
              La mejor solucion en sistemas de frenos automotrices.
            </p>
            <Link
              to="/servicios"
              className="rounded-md px-5 py-2.5 text-3xl font-semibold text-white bg-[#db2d2e] hover:bg-gray-900 hover:text-white"
            >
              Servicio
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex justify-end items-center">
          <div>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="absolute z-10 -mt-[6.5rem] mr-32 text-end w-4/6">
            <h2 className="text-white font-bold text-7xl leading-[5rem]">
              Las Mejores Marcas
            </h2>
            <p className="text-white font-normal text-2xl leading-[5rem] mb-5">
              Tu asesor especializado siempre listo para ayudarte a elegir el
              mejor producto.
            </p>
            <Link
              to="/servicios"
              className="rounded-md px-5 py-2.5 text-3xl font-semibold text-white bg-[#db2d2e] hover:bg-gray-900 hover:text-white"
            >
              Chat
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
