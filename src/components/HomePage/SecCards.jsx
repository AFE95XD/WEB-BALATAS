import {
    TagIcon,
    WrenchScrewdriverIcon,
    CreditCardIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
    {
        name: "Servicio de Frenos",
        href: "#",
        description:
            "Nos aseguramos que tu auto tenga el rendimiento óptimo de frenado.",
        icon: WrenchScrewdriverIcon,
    },
    {
        name: "Venta de Balatas",
        href: "#",
        description:
            "Balatas de calidad al mejor precio, la mejor eleccion para su vehiculo.",
        icon: TagIcon,
    },
    {
        name: "Formas de pago",
        href: "#",
        description:
            "Ofrecemos una amplia gama de opciones de pago para adaptarnos a sus necesidades.",
        icon: CreditCardIcon,
    },
];

const SecCards = () => {
    return (
        <section className="relative z-10 mx-auto sm:mt-0 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 lg:-mt-24">
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {supportLinks.map((link) => (
                    <div
                        key={link.name}
                        className="flex flex-col rounded-2xl bg-[#181A1B] shadow-xl px-6 py-8 md:px-8 items-center"
                    >
                        {/* <div className="relative flex-1 "> */}
                        <div className="inline-block transform rounded-xl bg-[#181A1B] px-5 pb-5">
                            <link.icon
                                className="h-10 w-10 text-[#DB2D2E]"
                                aria-hidden="true"
                            />
                        </div>
                        <h3 className="text-xl font-medium text-white">
                            {link.name}
                        </h3>

                        <p className="mt-4 text-base text-gray-400 text-justify">
                            {link.description}
                        </p>
                        {/* </div> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SecCards;
