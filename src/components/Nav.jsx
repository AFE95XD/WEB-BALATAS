import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const direccionarNavMoblie = (e, botton) => {
    e.preventDefault();
    if (botton === "servicios") {
      navigate(`/${botton}`);
    } else if (botton === "inicio") {
      navigate(`/`);
    } else if (botton === "blog") {
      navigate(`/${botton}`);
    }
  };
  return (
    <div className="fixed z-50 w-full">
      {/** <div> */}
      <div className="flex h-10 items-center justify-center bg-[#DB2D2E] px-4 lg:text-base text-xs sm:text-sm font-semibold text-white sm:px-6 lg:px-8 font-openSans">
        Llámanos: ​​(722) 238 5244, (722) 705 9029, (722) 471 1254
      </div>
      <Disclosure as="nav" className="bg-white fixed z-40 w-full">
        {/* <Disclosure as="nav" className="bg-slate-500"> */}
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 items-center justify-between">
                {/* ESTE ES EL DIN DEL LOGO */}
                <Link to="/">
                  <div className="flex-shrink-0">
                    <img
                      className="block h-12 w-auto lg:hidden"
                      // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      src="/assets/img/Logo SM PB Rojo.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-16 w-auto lg:block"
                      // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      src="/assets/img/Logo SM PB Rojo.png"
                      alt="Your Company"
                    />
                  </div>
                </Link>
                {/* DIV DEL MENU */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      to="/"
                      className="rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-[#DB2D2E] hover:text-white font-openSans"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/servicios"
                      className="rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-[#DB2D2E] hover:text-white font-openSans"
                    >
                      Servicios
                    </Link>
                    {/* <Link
                      to="/productos"
                      className="rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-[#FF9B16] hover:text-white font-openSans"
                    >
                      Productos
                    </Link> */}
                    <Link
                      to="/blog"
                      className="rounded-md px-3 py-2 text-base font-semibold text-black hover:bg-[#DB2D2E] hover:text-white font-openSans"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <Link
                    to="/registro"
                    className="rounded-md px-3 py-2 text-base font-semibold text-black mr-2 hover:bg-[#FF9B16] hover:text-white font-openSans"
                  >
                    Regístrate
                  </Link>
                  <Link
                    to="/login"
                    className="rounded-md px-3 py-2 text-base font-semibold text-white bg-[#FF9B16] hover:bg-gray-900 hover:text-white font-openSans"
                  >
                    Iniciar Sesión
                  </Link>
                </div> */}

                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* PANEL MOVIL */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "inicio")}
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white font-openSans"
                >
                  Inicio
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "servicios")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white font-openSans"
                >
                  Servicios
                </Disclosure.Button>
                {/* <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "productos")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Productos
                </Disclosure.Button> */}
                <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "blog")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white font-openSans"
                >
                  Blog
                </Disclosure.Button>
                {/* <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "productos")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white"
                >
                  Regístrate
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "blog")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white bg-[#FF9B16] hover:bg-gray-700 hover:text-white text-center"
                >
                  Iniciar Sesión
                </Disclosure.Button> */}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Nav;
