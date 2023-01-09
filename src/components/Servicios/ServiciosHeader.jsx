import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "Servicios", href: "#", current: false },
  // { name: "Project Nero", href: "#", current: true },
];

const ServiciosHeader = () => {
  return (
    <section className="bg-orange-600 pt-[7.5rem]">
      <div className="flex justify-center items-center">
        <img
          src="\assets\img\contactReparacion.jpg"
          alt="banerRep"
          className="w-full object-cover h-60 object-center"
        />
        <div className="flex flex-col absolute items-center py-auto">
          <div className="text-white font-roboto text-5xl font-bold pb-10">
            Servicios
          </div>

          <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <a href="#" className="text-white">
                    <HomeIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              {pages.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <ChevronRightIcon
                      className="h-7 w-7 flex-shrink-0 text-white font-openSans"
                      aria-hidden="true"
                    />
                    <a
                      href={page.href}
                      className="ml-4 font-medium text-white text-2xl font-openSans"
                      aria-current={page.current ? "page" : undefined}
                    >
                      {page.name}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHeader;
