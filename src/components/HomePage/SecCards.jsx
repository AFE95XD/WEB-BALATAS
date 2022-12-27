import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: LifebuoyIcon,
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    icon: NewspaperIcon,
  },
];

const SecCards = () => {
  return (
    <section className="relative z-10 mx-auto sm:mt-0 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8 lg:-mt-24 ">
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        {supportLinks.map((link) => (
          <div
            key={link.name}
            className="flex flex-col rounded-2xl bg-white shadow-xl"
          >
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
              {/* <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-blue-600 p-5 shadow-lg">
                <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div> */}
              {/* <h3 c0 */}
              <p className="mt-4 text-base text-blue-gray-500">
                {link.description}
              </p>
            </div>
            {/* <div className="rounded-bl-2xl rounded-br-2xl bg-blue-gray-50 p-6 md:px-8">
              <a
                href={link.href}
                className="text-base font-medium text-blue-700 hover:text-blue-600"
              >
                Contact us
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecCards;
