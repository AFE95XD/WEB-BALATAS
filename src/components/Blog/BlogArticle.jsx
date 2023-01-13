import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const cards = [
  {
    slug: "Tipos-de-balatas-y-sus-ventajas-y-desventajas",
    image: "src/assets/img/blogGrid1.jpg",
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
    image: "src/assets/img/blogGrid2.jpg",
    titulo: "Cómo funcionan los frenos de disco y de tambor",
    fecha: "Dec 22, 2023",
    descripcion: [
      {
        parrafo1:
          "Al principio no se pude distinguir balatas de buena o mala calidad, por eso es importante adquirir una marca que cuente con pruebas de seguridad para garantizar su desempeño en diferentes condiciones de frenado, además que cumplan las especificaciones del equipo original, así mismo necesitan adecuarse al presupuesto del usuario.",
      },
      {
        parrafo2:
          "<u>Frenos de tambor:</u> Este tipo de frenos está compuesto por una parte móvil, llamada tambor, que está montado sobre el buje de la rueda por medio de unos espárragos y tuercas, y un elemento fijo, llamado plato, el cual, lleva instalados los forros y los mecanismos de accionamientos para que puedan desplazarse las zapatas.",
      },
      {
        parrafo3:
          "<u>Frenos de disco:</u> Este sistema es el más utilizado en la mayoría de los vehículos turismo, ya que su frenado es más enérgico en comparación con los frenos de tambor, obteniéndose un menor tiempo de frenado y por tanto una menor.",
      },
    ],
  },
  {
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
              blog.map((el, i) => (
                <div key={i}>
                  {el.descripcion.map((item, i) => (
                    <p className="pb-6" key={i}>
                      {item.parrafo1}
                    </p>
                  ))}
                </div>
              ))}

            {/* <p className="pb-6">
              Al principio no se pude distinguir balatas de buena o mala
              calidad, por eso es importante adquirir una marca que cuente con
              pruebas de seguridad para garantizar su desempeño en diferentes
              condiciones de frenado, además que cumplan las especificaciones
              del equipo original, así mismo necesitan adecuarse al presupuesto
              del usuario.
            </p> */}

            {/* <p className="pb-6">
              <u>Orgánicas:</u> Son balatas fabricadas de compuestos y fibras
              que nos son metálicas, a las que se les agrega modificadores de
              fricción a base de grafito o metales en polvo. Ventaja: contribuye
              a la reducción de ruido. Desventaja: incrementa la transferencia
              de calor.
            </p> */}

            {/* <p className="pb-6">
              <u>Semimetálicas:</u> Son elaboradas a partir de la aleación de
              metales como el hierro, el cobre o el acero con componentes
              orgánicos. Ventaja: son más resistentes y duraderas por la mezcla
              de metales, también soportan altas temperaturas. Desventaja: en el
              mercado, son las que menos se utilizan.
            </p> */}

            {/* <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              Sportsman do offending supported extremity breakfast by listening.
              Decisively advantages nor expression unpleasing she led met.
              Estate was tended ten boy nearer seemed. As so seeing latter he
              should thirty whence. Steepest speaking up attended it as. Made
              neat an on be gave show snug tore.
            </div> */}

            {/* <p className="pb-6">
              <u>Metálicas:</u> Son fabricadas netamente a partir de metales.
              Ventaja: resiste a altas temperaturas. Desventaja: se considera
              obsoleta al carecer tecnología adecuada.
            </p> */}

            {/* <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
              Uneasy barton seeing remark happen his has
            </h2> */}

            {/* <p className="pb-6">
              Guest it he tears aware as. Make my no cold of need. He been past
              in by my hard. Warmly thrown oh he common future. Otherwise
              concealed favourite frankness on be at dashwoods defective at.
              Sympathize interested simplicity at do projecting increasing
              terminated. As edward settle limits at in.
            </p> */}

            {/* <p className="pb-6">
              <u>Sintéticas o de cerámica:</u> Son creadas a partir de fibra de
              vidrio, cuenta con material sintético llamado aramida. Ventaja:
              son más ligeras, resistentes y con una gran capacidad para
              transmitir el calor, son las más eficientes del mercado.
              Desventaja: el precio puede ser elevado para algunos
              usuarios.Sintéticas o de cerámica: Son creadas a partir de fibra
              de vidrio, cuenta con material sintético llamado aramida. Ventaja:
              son más ligeras, resistentes y con una gran capacidad para
              transmitir el calor, son las más eficientes del mercado.
              Desventaja: el precio puede ser elevado para algunos usuarios.
            </p> */}

            {/* <p className="pb-6">
              Breakfast agreeable incommode departure it an. By ignorant at on
              wondered relation. Enough at tastes really so cousin am of.
              Extensive therefore supported by extremity of contented. Is
              pursuit compact demesne invited elderly be. View him she roof tell
              her case has sigh. Moreover is possible he admitted sociable
              concerns. By in cold no less been sent hard hill.
            </p>

            <p className="pb-6">
              Detract yet delight written farther his general. If in so bred at
              dare rose lose good. Feel and make two real miss use easy.
              Celebrated delightful an especially increasing instrument am.
              Indulgence contrasted sufficient to unpleasant in in insensible
              favourable. Latter remark hunted enough vulgar say man. Sitting
              hearted on it without me.
            </p> */}
          </div>

          {/* <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Editor{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Mike writes about technology Yourself required no at thoughts
                delicate landlord it be. Branched dashwood do is whatever it.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div> */}
        </div>
      </main>
    </section>
  );
};

export default BlogArticle;
