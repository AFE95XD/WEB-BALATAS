import React from "react";

const SecMapa = () => {
  return (
    <section className="text-gray-600 body-font pb-8">
      <h2 className="text-center text-4xl font-bold text-white pb-16">
        Nos ubicamos en
      </h2>
      <div className="w-full">
        <iframe
          width="100%"
          height="600"
          //   frameBorder="0"
          //   scrolling="no"
          //   marginHeight="0"
          //   marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20Solidaridad%20Las%20Torres%201543%20%20San%20Salvador%20Tizatlalli%20%20Metepec,%20Edo.%20M%C3%A9x.,%20C.P.%2052172+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default SecMapa;
