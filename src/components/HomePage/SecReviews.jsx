import React from "react";

const SecReviews = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-gray-900 py-16">
        Testimonios
      </h2>
      <div className="grid md:grid-cols-2 gap-12 text-center">
        <div className="mb-6 md:mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(22).jpg"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-500">
            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
            elit sed ut perspiciatis unde omnis."
          </p>
          <p className="italic">- Anna Morian</p>
        </div>
        <div className="mb-0">
          <div className="flex justify-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(19).jpg"
              className="rounded-full shadow-lg w-24"
            />
          </div>
          <p className="text-xl my-4 text-gray-500">
            "Neque cupiditate assumenda in maiores repudiandae mollitia
            architecto elit sed adipiscing elit."
          </p>
          <p className="italic">- Teresa May</p>
        </div>
      </div>
    </section>
  );
};

export default SecReviews;
