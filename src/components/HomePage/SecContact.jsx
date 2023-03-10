import {
  EnvelopeIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "WhatsApp",
    href: "#",
    description:
      "Contacta al departamento de ventas para obtener una cotización y recibir asesoramiento para elegir el plan que más te conviene.",
    icon: PhoneIcon,
  },
  {
    name: "Correo Electronico",
    href: "#",
    description:
      "Contacta al departamento de ventas para obtener una cotización y recibir asesoramiento para elegir el plan que más te conviene.",
    icon: EnvelopeIcon,
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "¿Problemas con la plataforma? Comunicate con soporte tecnico para dar seguimiento al problema y obtener una solución oportuna.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function SecContacto() {
  return (
    <div className="bg-[#181A1B]">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/assets/img/contactReparacion.jpg"
            alt="imgContact"
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Contacto
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Nuestro compromiso es asesorar oportunamente a nuestros clientes
            para que tomen la mejor desición en seguros. Siempre la cobertura
            más completa al menor costo.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-[#181A1B] rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-[#DB2D2E] rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-white">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-400">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-[#1B1D1E] rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-[#DB2D2E] hover:text-[#DB2D2E]"
                >
                  Comunicate<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
