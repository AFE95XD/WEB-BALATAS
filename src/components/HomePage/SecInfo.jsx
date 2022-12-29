import React from "react";

const SecInfo = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="justify-self-center">
          <img
            src="https://demo.themexbd.com/html/hackery/assets/images/about.jpg"
            alt="imgInfo"
          />
        </div>
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-900 py-4">
            Siempre listos para ayudarte.
          </h2>
          <p className="font-medium text-justify py-4 px-4 text-base text-gray-600 leading-8">
            Siempre estamos listos para ayudarte a elegir los mejores frenos
            para tu auto. Sabemos que los frenos son un componente esencial de
            seguridad en tu vehículo y es importante que estén en buenas
            condiciones para garantizar tu seguridad y la de tus pasajeros.
            <br />
            <br />
            Contamos con un amplio surtido de frenos de alta calidad de las
            marcas más confiables del mercado. Nuestro equipo de profesionales
            está altamente capacitado y siempre está dispuesto a ayudarte a
            elegir el mejor tipo de freno para tu auto en función de tus
            necesidades y presupuesto.
            <br />
            <br />
            Además, ofrecemos un servicio de instalación profesional y rápido
            para que puedas conducir con confianza sabiendo que tus frenos están
            en las mejores condiciones posibles. ¡No dudes en visitarnos o en
            contactarnos para obtener más información sobre cómo podemos
            ayudarte a elegir los mejores frenos para tu auto!
          </p>
          {/* <button></button> */}
        </div>
      </div>
    </section>
  );
};

export default SecInfo;
