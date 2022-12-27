import React from "react";

const Registrarse = () => {
  return (
    <>
      {/*
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  */}
      <div className="h-screen">
        <div className="bg-[#db2d2d93] flex min-h-full flex-col justify-center py-[8.5rem] sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="pb-6 sm:mx-auto sm:w-full sm:max-w-md">
                <img
                  className="mx-auto h-14 w-auto"
                  src="src/assets/img/logo.webp"
                  alt="Logo-PremiumBrakes"
                />
                <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Registrate
                </h2>
              </div>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="name"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#db2d2e] focus:outline-none focus:ring-[#db2d2e] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#db2d2e] focus:outline-none focus:ring-[#db2d2e] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#db2d2e] focus:outline-none focus:ring-[#db2d2e] sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirmar Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      id="password-conf"
                      name="password-conf"
                      type="password-conf"
                      autoComplete="current-password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#db2d2e] focus:outline-none focus:ring-[#db2d2e] sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#db2d2e] focus:ring-[#db2d2e]"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Estoy de acuerdo con los términos del servicio.
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-[#db2d2e] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                  >
                    Registrarse
                  </button>
                </div>
                <div>
                  <p>
                    ¿Ya tienes una cuenta?{" "}
                    <a href="" className="text-sm font-medium text-[#db2d2e]">
                      Inicia Sesión
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrarse;
