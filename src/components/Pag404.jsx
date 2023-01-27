import React from "react";
import { Link } from "react-router-dom";

const Pag404 = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-[#DB2D2E] px-2 text-sm rounded rotate-12 absolute text-white">
        Página No Encontrada
      </div>
      <button class="mt-5">
        <a class="relative inline-block text-sm font-medium text-white group active:text-white focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#DB2D2E] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#DB2D2E] border border-current">
            <Link to="/">Ir al inicio</Link>
          </span>
        </a>
      </button>
    </main>
  );
};

export default Pag404;
