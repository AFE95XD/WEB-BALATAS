import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const cabecera = [
  {
    icono: HomeIcon,
    texto: "Av. Solidaridad Las Torres 1543",
  },
  {
    icono: PhoneIcon,
    texto: "(722) 238 5244",
  },
  {
    icono: EnvelopeIcon,
    texto: "sm.premiumbrakes@gmail.com",
  },
];

const social = [
  {
    name: "Facebook",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

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
      <div className="h-10 bg-[#DB2D2E] px-4 lg:text-base text-xs sm:text-sm font-semibold text-white sm:px-6 lg:px-8 font-openSans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full">
            <div className="hidden lg:flex lg:basis-4/5">
              {cabecera.map((item, i) => (
                <div className="flex justify-center items-center mr-6" key={i}>
                  <item.icono
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-openSans pl-2">{item.texto}</p>
                </div>
              ))}
            </div>
            <div className="flex basis-4/5 justify-center items-center lg:hidden">
              <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              <p className="text-sm font-openSans pl-2">
                (722) 238 5244, (722) 705 9029, (722) 471 1254
              </p>
            </div>
            <div className="flex basis-1/4 justify-end items-center">
              {social.map((item) => (
                <a key={item.name} href={item.href} className="text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 mx-2" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Disclosure as="nav" className="bg-[#181A1B] fixed z-40 w-full">
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
                      src="/assets/img/logo.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-16 w-auto lg:block"
                      // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      src="/assets/img/logo.png"
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
                      className="rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-[#DB2D2E] font-openSans"
                    >
                      Inicio
                    </Link>
                    <Link
                      to="/servicios"
                      className="rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-[#DB2D2E] font-openSans"
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
                      className="rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-[#DB2D2E] font-openSans"
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
                    Reg??strate
                  </Link>
                  <Link
                    to="/login"
                    className="rounded-md px-3 py-2 text-base font-semibold text-white bg-[#FF9B16] hover:bg-gray-900 hover:text-white font-openSans"
                  >
                    Iniciar Sesi??n
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
                  Reg??strate
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  onClick={(e) => direccionarNavMoblie(e, "blog")}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white bg-[#FF9B16] hover:bg-gray-700 hover:text-white text-center"
                >
                  Iniciar Sesi??n
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
