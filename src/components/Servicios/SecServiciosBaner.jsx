import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";

const contenido = [
  {
    icono: MapPinIcon,
    titulo: "Dirección",
    descripcion:
      "Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec, Edo. Méx., C.P. 52172",
  },
  {
    icono: PhoneIcon,
    titulo: "Telefonos",
    descripcion: "(722) 238 5244, (722) 705 9029, (722) 471 1254",
  },
  {
    icono: ClockIcon,
    titulo: "Horarios",
    descripcion:
      "LUNES - VIERNES: 9:00 AM - 6:00 PM ​SÁBADO: 9:00 AM - 2:00 PM",
  },
];

const SecServiciosBaner = () => {
  return (
    <section className="bg-[#FF9B16]">
      <div className="grid sm:grid-cols-1 sm:gap-x-px md:grid-cols-3 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 justify-items-center">
        {contenido.map((item, i) => (
          <div
            className="flex justify-items-center content-center flex-wrap"
            key={i}
          >
            <item.icono className="w-20 h-20 text-white pr-2" />
            <div className="w-80">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                {item.titulo}
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
        {/* <div>
          <div className="">
            <h3 className="font-roboto ">Telefonos</h3>
            <p className="font-openSans">
              (722) 238 5244, (722) 705 9029, (722) 471 1254
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h3 className="font-roboto ">Horarios</h3>
            <p className="font-openSans">
              LUNES - VIERNES: 9:00 AM - 6:00 PM ​SÁBADO: 9:00 AM - 2:00 PM
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SecServiciosBaner;
