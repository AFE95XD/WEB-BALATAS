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
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      tag="section"
      className="pt-[7.5rem]"
    >
      <SwiperSlide>
        <div className="relative flex justify-center items-center lg:justify-start lg:items-center">
          <div>
            <img
              src="https://demo.themexbd.com/html/hackery/assets/images/hackery-slider1.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="absolute z-10 lg:ml-32 w-4/6 flex flex-col justify-center items-center lg:justify-start lg:items-center lg:block lg:-mt-[6.5rem]">
            <h2 className="text-base text-white font-bold text-center font-roboto md:text-4xl md:font-bold lg:text-6xl lg:text-start lg:leading-[4rem]">
              Frenos Confiables, Seguridad Garantizada
            </h2>
            <p className="text-white font-openSans text-sm mb-5 text-center md:font-normal md:text-2xl lg:font-normal lg:text-2xl lg:text-start lg:leading-[4rem]">
              La mejor solucion en sistemas de frenos automotrices.
            </p>
            <Link
              to="/servicios"
              className="rounded-md px-5 py-2.5 text-sm md:text-lg font-semibold font-openSans text-white bg-[#DB2D2E] hover:bg-gray-900 flex-none lg:text-3xl"
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
          <div className="absolute z-10 lg:mr-32 w-4/6 flex flex-col justify-center items-center lg:justify-end lg:items-end lg:block lg:-mt-[6.5rem] lg:text-end leading-[5rem]">
            <h2 className="text-base text-white font-bold text-center font-roboto md:text-4xl md:font-bold lg:text-6xl lg:text-end lg:leading-[4rem]">
              Las Mejores Marcas
            </h2>
            <p className="text-white font-openSans text-sm mb-5 text-center md:font-normal md:text-2xl lg:font-normal lg:text-2xl lg:text-end">
              Tu asesor especializado siempre listo para ayudarte a elegir el
              mejor producto.
            </p>
            <Link
              to="/pagina-no-encontrada"
              className="rounded-md px-5 py-2.5 text-sm md:text-lg font-semibold font-openSans text-white bg-[#DB2D2E] hover:bg-gray-900 flex-none lg:text-3xl"
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
