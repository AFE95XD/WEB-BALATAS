import {
  LifebuoyIcon,
  WrenchScrewdriverIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "Servicio de Frenos",
    href: "#",
    description:
      "Nos aseguramos que tu auto tenga el rendimiento óptimo de frenado.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Venta de Balatas",
    href: "#",
    description:
      "Balatas de calidad al mejor precio, la mejor eleccion para su vehiculo.",
    icon: LifebuoyIcon,
  },
  {
    name: "Formas de pago",
    href: "#",
    description:
      "Ofrecemos una amplia gama de opciones de pago para adaptarnos a sus necesidades.",
    icon: CreditCardIcon,
  },
  {
    name: "Servicio de Frenos",
    href: "#",
    description:
      "Nos aseguramos que tu auto tenga el rendimiento óptimo de frenado.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Venta de Balatas",
    href: "#",
    description:
      "Balatas de calidad al mejor precio, la mejor eleccion para su vehiculo.",
    icon: LifebuoyIcon,
  },
  {
    name: "Formas de pago",
    href: "#",
    description:
      "Ofrecemos una amplia gama de opciones de pago para adaptarnos a sus necesidades.",
    icon: CreditCardIcon,
  },
];

const ServiciosInfo = () => {
  return (
    <section className="w-full bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Titulo */}
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-[#DB2D2E] mb-2 block font-openSans">
                Nuestros Servicios
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-[#090e34] mb-4 font-roboto">
                Calidad de Servicio
              </h2>
              <p className="text-base text-[#637381] font-openSans">
                Contamos con asesoría técnica especializada, venta al público y
                servicio a domicilio.
              </p>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
          {supportLinks.map((link, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-white shadow-black px-6 py-8 md:px-8 items-center"
            >
              {/* <div className="relative flex-1 "> */}
              <div className="inline-block transform rounded-xl bg-white px-5 pb-5">
                <link.icon
                  className="h-10 w-10 text-[#DB2D2E]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 font-roboto">
                {link.name}
              </h3>

              <p className="mt-4 text-base text-gray-600 text-justify font-openSans">
                {link.description}
              </p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosInfo;
