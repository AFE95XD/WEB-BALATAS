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
    <section className="w-full bg-[#DB2D2E]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* ESTE ES GRID */}
        {/* <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-y-8 lg:gap-x-8"> */}
        {/* ESTE ES FLEX */}
        <div className="flex md:flex-row md:gap-y-10 flex-col gap-10">
          {/* <div className="flex flex-col items-center lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div> */}
          {/* -------Este es para FLEX------- */}
          {/* <div className="flex items-center flex-col lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row">
            <MapPinIcon className="w-20 h-20 text-white pr-2" />
            <div className="w-full text-center">
              <h3 className="font-roboto text-white font-bold text-xl pb-2">
                Dirección
              </h3>
              <p className="font-openSans text-white font-normal text-base">
                Av. Solidaridad Las Torres 1543 San Salvador Tizatlalli Metepec,
                Edo. Méx., C.P. 52172
              </p>
            </div>
          </div> */}
          {contenido.map((item, i) => (
            <div className="flex items-center flex-col lg:flex-row" key={i}>
              <item.icono className="w-20 h-20 text-white pr-2" />
              <div className="w-full text-center">
                <h3 className="font-roboto text-white font-bold text-xl pb-2">
                  {item.titulo}
                </h3>
                <p className="font-openSans text-white font-normal text-base">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecServiciosBaner;
