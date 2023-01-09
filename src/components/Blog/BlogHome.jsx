import { Link } from "react-router-dom";

const cards = [
  {
    url: "Tipos-de-balatas-y-sus-ventajas-y-desventajas",
    image: "/assets/img/blogGrid1.jpg",
    titulo: "Tipos de balatas y sus ventajas y desventajas.",
    fecha: "Dec 22, 2023",
    descripcion:
      "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad...",
  },
  {
    url: "Como-funcionan-los-frenos-de-disco-y-de-tambor",
    image: "/assets/img/blogGrid2.jpg",
    titulo: "Cómo funcionan los frenos de disco y de tambor",
    fecha: "Mar 15, 2023",
    descripcion:
      "Los frenos de tambor funcionan según el mismo principio que los frenos de disco: dos elementos que actúan como componentes de fricción y un pistón...",
  },
  {
    image: "/assets/img/blogGrid3.jpg",
    titulo: "Cómo elegir el tipo de balatas adecuadas para tu auto.",
    fecha: "Jan 05, 2023",
    descripcion:
      "En primer instancia es necesario tener en consideración las diferencias entre los tipos de balata, al tener el conocimiento el usuarios podrá elegir...",
  },
];

const BlogHome = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Titulo */}
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-[#FF9B16] mb-2 block font-openSans">
                  Nuestro Blog
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-[#090e34] mb-4 font-roboto">
                  Publicaciones Recientes
                </h2>
                <p className="text-base text-[#637381] font-openSans">
                  Bienvenido al blog de Premium Brakes, en este sitio
                  encontraras información a balatas y su funcionamiento así como
                  temas relacionados a los sistemas de frenos completos.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-4"> */}
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-8">
            {cards.map((card, i) => (
              <div
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                key={i}
              >
                {/* Este div es de la imagen */}
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={card.image}
                    alt={`imgBlogGrid${i}`}
                  />
                </div>
                {/* este div es del titulo y la descripcion el complemento de la card */}
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  {/* titulo y descripcion de la card */}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-600">
                      <span className="inline-block bg-[#FF9B16] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                        {card.fecha}
                      </span>
                    </p>
                    <div className="mt-2 block">
                      <Link
                        to={`/blog/${card.url}`}
                        className="text-xl font-semibold text-gray-900 hover:text-[#FF9B16]"
                        // onClick={<BlogPost />}
                      >
                        {card.titulo}
                      </Link>
                      <p className="mt-3 text-base text-gray-500">
                        {card.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
