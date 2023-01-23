import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const cards = [
  {
    slug: "Tipos-de-balatas-y-sus-ventajas-y-desventajas", //este es el titulo de la url
    image: "/assets/img/blogGrid1.jpg",
    titulo: "Tipos de balatas y sus ventajas y desventajas.",
    fecha: "Dec 22, 2023",
    descripcion: [
      {
        parrafo1:
          "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad para garantizar su desempeño en diferentes condiciones de frenado, además que cumplan las especificaciones del equipo original, así mismo necesitan adecuarse al presupuesto del usuario.",
      },
      {
        parrafo1:
          "Orgánicas: Son balatas fabricadas de compuestos y fibras que nos son metálicas, a las que se les agrega modificadores de fricción a base de grafito o metales en polvo. Ventaja: contribuye a la reducción de ruido. Desventaja: incrementa la transferencia de calor.",
      },
      {
        parrafo1:
          "Semimetálicas: Son elaboradas a partir de la aleación de metales como el hierro, el cobre o el acero con componentes orgánicos. Ventaja: son más resistentes y duraderas por la mezcla de metales, también soportan altas temperaturas. Desventaja: en el mercado, son las que menos se utilizan.",
      },
      {
        parrafo1:
          "Metálicas: Son fabricadas netamente a partir de metales. Ventaja: resiste a altas temperaturas. Desventaja: se considera obsoleta al carecer tecnología adecuada.",
      },
      {
        parrafo1:
          "Sintéticas o de cerámica: Son creadas a partir de fibra de vidrio, cuenta con material sintético llamado aramida. Ventaja: son más ligeras, resistentes y con una gran capacidad para transmitir el calor, son las más eficientes del mercado. Desventaja: el precio puede ser elevado para algunos usuarios.Sintéticas o de cerámica: Son creadas a partir de fibra de vidrio, cuenta con material sintético llamado aramida. Ventaja: son más ligeras, resistentes y con una gran capacidad para transmitir el calor, son las más eficientes del mercado. Desventaja: el precio puede ser elevado para algunos usuarios.",
      },
    ],
  },
  {
    slug: "Como-funcionan-los-frenos-de-disco-y-de-tambor",
    image: "/assets/img/blogGrid2.jpg",
    titulo: "Cómo funcionan los frenos de disco y de tambor",
    fecha: "Dec 22, 2023",
    descripcion: [
      {
        parrafo1:
          "Los frenos de disco y de tambor son dos tipos diferentes de frenos que se utilizan en los vehículos.",
      },
      {
        parrafo1:
          "Los frenos de disco funcionan mediante un conjunto de discos y pastillas que se encuentran en las ruedas delanteras. Cuando se activa el pedal de freno, las pastillas se presionan contra los discos para generar fricción y detener el vehículo. Los frenos de disco son más eficientes y se calientan menos que los frenos de tambor, lo que los hace ideales para vehículos de alto rendimiento o de uso intensivo.",
      },
      {
        parrafo1: "Frenos de tambor",
      },
      {
        parrafo1:
          "Este tipo de frenos está compuesto por una parte móvil, llamada tambor, que está montado sobre el buje de la rueda por medio de unos espárragos y tuercas, y un elemento fijo, llamado plato, el cual, lleva instalados los forros y los mecanismos de accionamientos para que puedan desplazarse las zapatas.",
      },
      {
        parrafo1: "Frenos de disco",
      },
      {
        parrafo1:
          "Este sistema es el más utilizado en la mayoría de los vehículos turismo, ya que su frenado es más enérgico en comparación con los frenos de tambor, obteniéndose un menor tiempo de frenado y por tanto una menor distancia de frenada. Esto es debido a que los elementos de fricción están montados al aire con lo que mejora la refrigeración, por lo que la absorción de energía y su transformación se realizan más rápidamente.",
      },
    ],
  },
  {
    slug: "Tipos-de-balatas-y-sus-ventajas-y-desventajas",
    image: "src/assets/img/blogGrid3.jpg",
    titulo: "Tipos de balatas y sus ventajas y desventajas.",
    fecha: "Dec 22, 2023",
    descripcion: [
      {
        parrafo1:
          "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad para garantizar su desempeño en diferentes condiciones de frenado, además que cumplan las especificaciones del equipo original, así mismo necesitan adecuarse al presupuesto del usuario.",
      },
      {
        parrafo2:
          "<u>Orgánicas:</u> Son balatas fabricadas de compuestos y fibras que nos son metálicas, a las que se les agrega modificadores de fricción a base de grafito o metales en polvo. Ventaja: contribuye a la reducción de ruido. Desventaja: incrementa la transferencia de calor.",
      },
      {
        parrafo3:
          "<u>Semimetálicas:</u> Son elaboradas a partir de la aleación de metales como el hierro, el cobre o el acero con componentes orgánicos. Ventaja: son más resistentes y duraderas por la mezcla de metales, también soportan altas temperaturas. Desventaja: en el mercado, son las que menos se utilizan.",
      },
      {
        parrafo4:
          "<u>Metálicas:</u> Son fabricadas netamente a partir de metales. Ventaja: resiste a altas temperaturas. Desventaja: se considera obsoleta al carecer tecnología adecuada.",
      },
    ],
  },
];

const BlogArticle = () => {
  const [blog, setBlog] = useState({}); //Se inicializa un objeto en vacio
  const params = useParams(); //Obtenemos la informacion de la url en este caso el slug
  console.log(params);
  const navigate = useNavigate(); //Lo utilizamos para navegar en una ruta
  useEffect(() => {
    const x = cards.filter((element) => {
      return element.slug === params.title; //compara si el filtro es igual al parametro que sacamos anteriormente en el useParams(el slug)
    });
    console.log(x);
    if (!x[0]) {
      //verifica que si no exite el slug
      return navigate("/"); //si no existe manda a 404
    }
    setBlog(x);
  }, []);
  console.log(blog);

  return (
    <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <main className="mt-10">
        {/* TITULO E IMAGEN */}
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight mb-4">
              {blog[0] && blog[0].titulo}
            </h2>
          </div>
          <img
            src="/assets/img/blogGrid1.jpg"
            className="w-full object-cover lg:rounded h-96"
          />
        </div>
        {/* CUERPO DEL ARTICULO */}
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            {blog[0] &&
              blog.map((elementosBlog, i) => (
                <div key={i}>
                  {elementosBlog.descripcion.map((item, i) => (
                    <p className="pb-6" key={i}>
                      {item.parrafo1}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default BlogArticle;
