import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      // navigation={true}
      loop={true}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      tag="section"
      className="pt-[6.5rem]"
    >
      <SwiperSlide>
        <div className="relative flex justify-center items-center lg:justify-start lg:items-center">
          <div>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="absolute z-10 lg:ml-32 w-4/6 flex flex-col justify-center items-center">
            {/* <h2 className="text-6xl md:text-white md:font-bold md:leading-[5rem]"> */}
            {/* <h2 className="md:text-4xl md:text-white md:font-bold leading-5 "> */}
            <h2 className="text-base text-white font-bold text-center font-roboto">
              Frenos Confiables, Seguridad Garantizada
            </h2>
            {/* <p className="text-white font-normal text-2xl lg:leading-[5rem] mb-5"> */}
            <p className="text-white font-openSans text-sm mb-5 text-center">
              La mejor solucion en sistemas de frenos automotrices.
            </p>
            <Link
              to="/servicios"
              // className="rounded-md px-5 py-2.5 lg:text-3xl text-xl font-semibold font-openSans text-white bg-[#FF9B16] hover:bg-gray-900 hover:text-white flex-none"
              className="rounded-md px-5 py-2.5 text-sm font-semibold font-openSans text-white bg-[#FF9B16] hover:bg-gray-900 hover:text-white flex-none"
            >
              Servicio
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative flex justify-center items-center lg:justify-end lg:items-center">
          <div>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider2.jpg"
              alt="Imagen 2"
            />
          </div>
          <div className="absolute z-10 lg:mr-32 w-4/6 flex flex-col justify-center items-center">
            {/* <h2 className="text-white font-bold text-7xl leading-[5rem]"> */}
            <h2 className="text-base text-white font-bold text-center font-roboto">
              Las Mejores Marcas
            </h2>
            <p className="text-white font-openSans text-sm mb-5 text-center">
              Tu asesor especializado siempre listo para ayudarte a elegir el
              mejor producto.
            </p>
            <Link
              to="/servicios"
              className="rounded-md px-5 py-2.5 text-sm font-semibold font-openSans text-white bg-[#FF9B16] hover:bg-gray-900 hover:text-white flex-none"
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
