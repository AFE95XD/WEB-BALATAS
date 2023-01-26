import React from "react";

const SecReviews = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-white py-16 font-openSans">
        Testimonios
      </h2>
      <div className="grid md:grid-cols-2 gap-12 text-center">
        <div className="mb-6 md:mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/img/usuario1.jpg"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-400 font-roboto">
            "Acudí a este taller para reemplazar las balatas de mi coche y la
            experiencia fue excelente."
          </p>
          <p className="italic text-white font-roboto">- Adrian Cordero</p>
        </div>
        <div className="mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/img/usuario2.jpeg"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-400 font-roboto">
            "El personal fue muy amable y servicial desde el primer momento, y
            se aseguraron de que entendiera el proceso y los costos
            involucrados."
          </p>
          <p className="italic text-white font-roboto">- Prisilla Gallardo</p>
        </div>
      </div>
    </section>
  );
};

export default SecReviews;
