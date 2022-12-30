import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SecMarcas = () => {
  return (
    // <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //   <h2 className="text-center text-4xl font-bold text-gray-900 py-4">
    //     Marcas
    //   </h2>
    //   <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_d73160911b15439d8d222683d9152969~mv2.jpg/v1/fill/w_171,h_71,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_d73160911b15439d8d222683d9152969~mv2.jpg"
    //         alt="Workcation"
    //       />
    //     </div>
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_ec6406542a10448f9ebefb5d0eb60fd2~mv2.jpg/v1/crop/x_0,y_335,w_1134,h_464/fill/w_171,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_ec6406542a10448f9ebefb5d0eb60fd2~mv2.jpg"
    //         alt="Mirage"
    //       />
    //     </div>
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_89d68d07a7d54d2d96e01f374797806c~mv2.jpg/v1/fill/w_130,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_89d68d07a7d54d2d96e01f374797806c~mv2.jpg"
    //         alt="Tuple"
    //       />
    //     </div>
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_c7d469f4ea724669b031340e8b789eb5~mv2.jpg/v1/crop/x_0,y_306,w_1134,h_521/fill/w_174,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_c7d469f4ea724669b031340e8b789eb5~mv2.jpg"
    //         alt="Laravel"
    //       />
    //     </div>
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_80bbf3baaa264a639b6174002c13e43e~mv2.jpg/v1/crop/x_0,y_334,w_1134,h_467/fill/w_170,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_80bbf3baaa264a639b6174002c13e43e~mv2.jpg"
    //         alt="StaticKit"
    //       />
    //     </div>
    //     <div className="col-span-1 flex justify-center py-8 px-8">
    //       <img
    //         className="grayscale hover:grayscale-0"
    //         src="https://static.wixstatic.com/media/7c30c1_bbfdd996f3714b99afa71e5614298a5c~mv2.jpg/v1/crop/x_0,y_270,w_1134,h_593/fill/w_172,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_bbfdd996f3714b99afa71e5614298a5c~mv2.jpg"
    //         alt="Statamic"
    //       />
    //     </div>
    //   </div>
    // </section>
    <Swiper
      modules={[Autoplay]}
      slidesPerView={6}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      tag="section"
      //   className="pt-[6.5rem]"
    >
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_d73160911b15439d8d222683d9152969~mv2.jpg/v1/fill/w_171,h_71,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_d73160911b15439d8d222683d9152969~mv2.jpg"
            alt="Workcation"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_ec6406542a10448f9ebefb5d0eb60fd2~mv2.jpg/v1/crop/x_0,y_335,w_1134,h_464/fill/w_171,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_ec6406542a10448f9ebefb5d0eb60fd2~mv2.jpg"
            alt="Mirage"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_89d68d07a7d54d2d96e01f374797806c~mv2.jpg/v1/fill/w_130,h_129,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_89d68d07a7d54d2d96e01f374797806c~mv2.jpg"
            alt="Mirage"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_c7d469f4ea724669b031340e8b789eb5~mv2.jpg/v1/crop/x_0,y_306,w_1134,h_521/fill/w_174,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_c7d469f4ea724669b031340e8b789eb5~mv2.jpg"
            alt="Mirage"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_80bbf3baaa264a639b6174002c13e43e~mv2.jpg/v1/crop/x_0,y_334,w_1134,h_467/fill/w_170,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_80bbf3baaa264a639b6174002c13e43e~mv2.jpg"
            alt="Mirage"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="col-span-1 flex justify-center">
          <img
            className="grayscale hover:grayscale-0"
            src="https://static.wixstatic.com/media/7c30c1_bbfdd996f3714b99afa71e5614298a5c~mv2.jpg/v1/crop/x_0,y_270,w_1134,h_593/fill/w_172,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7c30c1_bbfdd996f3714b99afa71e5614298a5c~mv2.jpg"
            alt="Mirage"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SecMarcas;
