const cards = [
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    titulo: "Meet AutoManage, the best AI management tools",
    fecha: "Dec 22, 2023",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi doloremque dolorum accusamus aut itaque ut ipsa vero in.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg",
    titulo: "How to earn more money as a wellness coach",
    fecha: "Mar 15, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg",
    titulo: "The no-fuss guide to upselling and cross selling",
    fecha: "Jan 05, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    titulo: "Meet AutoManage, the best AI management tools",
    fecha: "Dec 22, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg",
    titulo: "How to earn more money as a wellness coach",
    fecha: "Mar 15, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg",
    titulo: "The no-fuss guide to upselling and cross selling",
    fecha: "Jan 05, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg",
    titulo: "Meet AutoManage, the best AI management tools",
    fecha: "Dec 22, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg",
    titulo: "How to earn more money as a wellness coach",
    fecha: "Mar 15, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    href: "https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg",
    titulo: "The no-fuss guide to upselling and cross selling",
    fecha: "Jan 05, 2023",
    descripcion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const BlogHome = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="container">
          {/* Titulo */}
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-[#3056d3] mb-2 block">
                  Nuestro Blog
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-[#090e34] mb-4">
                  Publicaciones Recientes
                </h2>
                <p className="text-base text-[#637381]">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {cards.map((card) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10 shadow-xl rounded-b-md">
                  <div className="rounded-t-md overflow-hidden">
                    <img src={card.href} alt="image" className="w-full" />
                  </div>
                  <div className="p-6">
                    <span className="bg-[#3056d3] rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                      {card.fecha}
                    </span>
                    <h3>
                      <a
                        href="#"
                        className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-[#090e34] hover:text-[#3056d3]"
                      >
                        {card.titulo}
                      </a>
                    </h3>
                    <p className="text-base text-[#637381]">
                      {card.descripcion}
                    </p>
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
